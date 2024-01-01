// File: server/api/2fa/setup.js

import { defineEventHandler } from "h3";
import speakeasy from "speakeasy";
import qrcode from "qrcode";
import * as mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  try {
    const { uid } = await readBody<{
      uid: string;
    }>(event);
    // Genera un segreto univoco per l'utente
    const secret = speakeasy.generateSecret();

    await saveTempSecret(uid, secret.base32);

    // Genera un QR code che l'utente può scansionare
    const qrCodeImageUrl = await qrcode.toDataURL(secret.otpauth_url ?? "");

    // Restituisci il QR code all'utente
    return { qrCodeImageUrl };
  } catch (error) {
    console.error(error);
    return createError({ statusCode: 500, message: "Errore nella generazione del segreto 2FA" });
  }
});

async function saveTempSecret(userId: string, secret: string) {
  // Implementa la logica per salvare temporaneamente il segreto nel database
  const connection = await mysql.createConnection(
    'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
  );

  // Esegui qui le operazioni desiderate con la connessione al database
  //add id to vulnerability table
  const updateQuery = `
  UPDATE \`guardianflow\`.\`user\`
  SET \`two_factor_token\` = ?
  WHERE (\`id\` = ?);
`;
  await connection.execute(updateQuery, [secret, userId]);
  // Chiudi la connessione dopo aver eseguito le operazioni necessarie
  await connection.end();
}
