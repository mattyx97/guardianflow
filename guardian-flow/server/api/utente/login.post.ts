import { LuciaError } from "lucia";
import CryptoJS from "crypto-js";

export default defineEventHandler(async event => {
  const { username, password } = await readBody<{
    username: unknown;
    password: unknown;
  }>(event);
  // basic check
  if (typeof username !== "string" || username.length < 1 || username.length > 31) {
    throw createError({
      message: "Invalid username",
      statusCode: 400,
    });
  }
  if (typeof password !== "string" || password.length < 1 || password.length > 255) {
    throw createError({
      message: "Invalid password",
      statusCode: 400,
    });
  }
  try {
    // find user by key
    // and validate password
    const key = await auth.useKey("username", username.toLowerCase(), password);

    const user = await auth.getUser(key.userId);
    console.log(user);
    if (user.twoFactorEnabled) {
      console.log("2FA enabled");
      // 2FA is enabled
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify({ userId: key.userId, timestamp: Date.now() }),
        "tuo_segreto"
      ).toString();

      // Imposta un cookie con le credenziali criptate
      event.res.setHeader("Set-Cookie", `tempAuth=${ciphertext}; HttpOnly; Path=/; Max-Age=300`); // Max-Age di 5 minuti

      console.log("redirecting to 2fa");
      return {
        statusCode: 200,
        body: {
          message: "2FA successful. Please redirect.",
          redirectTo: "/2fa",
        },
      };
    }

    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(event);
    authRequest.setSession(session);
    return {
      statusCode: 200,
      body: {
        message: "Login successful. Please redirect.",
        redirectTo: "/",
      },
    };
  } catch (e) {
    console.error(e);
    if (
      e instanceof LuciaError &&
      (e.message === "AUTH_INVALID_KEY_ID" || e.message === "AUTH_INVALID_PASSWORD")
    ) {
      // user does not exist
      // or invalid password
      throw createError({
        message: "Incorrect username or password",
        statusCode: 400,
      });
    }
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    });
  }
});
