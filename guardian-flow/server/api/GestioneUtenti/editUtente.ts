// server/api/hello.ts

import * as mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const id = body.id;
  const email = body.email;
  const permessi = body.permessi;
  const uid = body.uid;

  console.log("id: ", uid);

  try {
    // Crea la connessione al database
    const connection = await mysql.createConnection(
      'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
    );

    // Esegui qui le operazioni desiderate con la connessione al database
    //add id to vulnerability table
    await connection.execute("UPDATE user SET email = ? or permessi = ? WHERE user.id = ?", [uid, email, permessi]);
    console.log("id: ", id);

    // Chiudi la connessione dopo aver eseguito le operazioni necessarie
    await connection.end();

    return {
      message: "Utente Modificato!",
    };
  } catch (error: any) {
    console.error("Error connecting to the database:", error);
    return {
      error: error.code,
    };
  }
});

// server/api/hello.ts

