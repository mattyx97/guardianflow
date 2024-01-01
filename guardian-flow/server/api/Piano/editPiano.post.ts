// server/api/hello.ts

import * as mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const id_piano = body.id_piano;
  
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();
  const uid = session?.user.userId;

  console.log("id_piano: ", id_piano);
  if (!uid) throw createError({ message: "Invalid session", statusCode: 400 });

  try {
    // Crea la connessione al database
    const connection = await mysql.createConnection(
      'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
    );

    // Esegui qui le operazioni desiderate con la connessione al database
    //add id to vulnerability table
    await connection.execute(
      "UPDATE azienda INNER JOIN user ON azienda.id = user.azienda_id SET id_piano = ? WHERE user.id  = ?",
      [id_piano, uid]
    );

    // Chiudi la connessione dopo aver eseguito le operazioni necessarie
    await connection.end();

    return {
      message: "Vulnerability added!",
    };
  } catch (error: any) {
    console.error("Error connecting to the database:", error);
    return {
      error: error.code,
    };
  }
});
