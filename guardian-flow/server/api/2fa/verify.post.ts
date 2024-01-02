// File: server/api/2fa/verify.js
import * as mysql from "mysql2/promise";

import { defineEventHandler } from "h3";
import speakeasy from "speakeasy";

export default defineEventHandler(async event => {
  const { token, userId } = await readBody<{
    token: string;
    userId: string;
  }>(event);

  try {
    // Recupera il segreto temporaneo salvato (sostituisci con il tuo DB)
    const tempSecret = await getTempSecret(userId);

    // Verifica il token fornito dall'utente
    const verified = speakeasy.totp.verify({
      secret: tempSecret,
      encoding: "base32",
      token: token,
    });

    if (verified) {
      // Il token è valido, abilita il 2FA per l'utente
      set2faEnabled(userId, tempSecret);
      console.log("2FA enabled");
      return { verified: true };
    } else {
      // Il token non è valido
      return createError({ statusCode: 400, message: "Token 2FA non valido" });
    }
  } catch (error) {
    console.error(error);
    return createError({ statusCode: 500, message: "Errore nella verifica del token 2FA" });
  }
});

async function getTempSecret(userId: string) {
  // Implementa la logica per recuperare il segreto temporaneo dal database
  const connection = await mysql.createConnection(
    'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
  );

  // Esegui qui le operazioni desiderate con la connessione al database
  const Query = `
    SELECT \`two_factor_token\`
    FROM \`guardianflow\`.\`user\`
    WHERE (\`id\` = ?);
  `;

  const [rows] = await connection.execute(Query, [userId]);

  // Chiudi la connessione dopo aver eseguito le operazioni necessarie
  await connection.end();

  //@ts-ignore
  const token = rows[0].two_factor_token;

  return token;
}
async function set2faEnabled(userId: string, tempSecret: string) {
  const connection = await mysql.createConnection(
    'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
  );

  const updateQuery = `
    UPDATE \`guardianflow\`.\`user\`
    SET \`two_factor\` = ?
    WHERE (\`id\` = ?);
  `;
  await connection.execute(updateQuery, [1, userId]);
  // Chiudi la connessione dopo aver eseguito le operazioni necessarie
  await connection.end();
}
