export default defineEventHandler(async event => {
  const { username, password } = await readBody<{
    username: unknown;
    password: unknown;
  }>(event);
  // basic check
  if (typeof username !== "string" || username.length < 4 || username.length > 31) {
    throw createError({
      message: "Invalid username",
      statusCode: 400,
    });
  }
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    throw createError({
      message: "Invalid password",
      statusCode: 400,
    });
  }
  try {
    const user = await auth.createUser({
      key: {
        providerId: "username", // auth method
        providerUserId: username.toLowerCase(), // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        username,
      },
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(event);
    authRequest.setSession(session);
    return sendRedirect(event, "/"); // redirect to profile page
  } catch (e: any) {
    // check for unique constraint error in user table

    console.log(e);
    throw createError({
      message: e.message,
      statusCode: 500,
    });
  }
});
