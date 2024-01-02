import CryptoJS from "crypto-js";
import { LuciaError } from "lucia"; // Importa il modulo di autenticazione che stai utilizzando

export default defineEventHandler(async event => {
  const cookies = event.req.headers.cookie ?? '';
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
  const isTokenValid = verify2FAToken(token2FA, decryptedData.userId); // Assumi che questa funzione esista per verificare il token 2FA

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

// Funzione fittizia per la verifica del token 2FA
function verify2FAToken(token: String, userId: String) {
  // Implementa la logica per verificare il token 2FA qui.
  // Questo solitamente coinvolge la verifica del token con il segreto 2FA dell'utente
  // che è memorizzato in modo sicuro da qualche parte (come il database)
  return true; // Restituisce true se il token è valido, altrimenti false
}
