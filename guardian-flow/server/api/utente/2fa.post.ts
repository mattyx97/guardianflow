import CryptoJS from "crypto-js";
import speakeasy from "speakeasy";

export default defineEventHandler(async event => {
  const cookies = event.req.headers.cookie ?? "";
  const tempAuthCookie = cookies.split(";").find(c => c.trim().startsWith("tempAuth="));

  if (!tempAuthCookie) {
    throw createError({ message: "Sessione di autenticazione non trovata.", statusCode: 401 });
  }

  const tempAuth = tempAuthCookie.split("=")[1];
  const bytes = CryptoJS.AES.decrypt(tempAuth, "tuo_segreto");
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  // Verifica che il cookie non sia scaduto
  if (Date.now() - decryptedData.timestamp > 300000) {
    // 5 minuti
    throw createError({ message: "Sessione di autenticazione scaduta.", statusCode: 401 });
  }

  // Supponendo di avere il token 2FA dal corpo della richiesta
  const { token2FA } = await readBody(event);

  // Qui decodifichi il token 2FA inviato dall'utente
  const isTokenValid = await verify2FAToken(token2FA, decryptedData.userId); // Assumi che questa funzione esista per verificare il token 2FA

  if (!isTokenValid) {
    throw createError({ message: "Token 2FA non valido.", statusCode: 401 });
  }

  // Se il token 2FA è valido, completa l'autenticazione
  try {
    const session = await auth.createSession({
      userId: decryptedData.userId,
      attributes: {},
    });

    const user = await auth.getUser(decryptedData.userId);

    const authRequest = auth.handleRequest(event);
    authRequest.setSession(session);
    return sendRedirect(event, "/");
  } catch (error) {
    throw createError({ message: "Errore durante la creazione della sessione.", statusCode: 500 });
  }
});

async function verify2FAToken(token: string, userId: string) {
  const user2FASecret = await get2FASecretByUserId(userId);
  if (!user2FASecret) {
    throw new Error("Nessun segreto 2FA trovato per questo utente.");
  }
  console.log("user2FASecret", user2FASecret);
  console.log("token", token);
  const isTokenValid = speakeasy.totp.verify({
    secret: user2FASecret,
    encoding: "base32",
    token: token,
  });
  console.log("isTokenValid", isTokenValid);
  return isTokenValid;
}

async function get2FASecretByUserId(userId: string) {
  const user = await auth.getUser(userId);
  return user.twoFactorToken;
}
