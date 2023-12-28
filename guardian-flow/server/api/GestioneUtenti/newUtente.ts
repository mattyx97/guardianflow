// server/api/hello.ts

import * as mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  console.log("body: ", body);
  const nome = body.nome;
  const cognome = body.cognome;
  const email = body.email;
  const permessi = body.permessi;


  try {
    // Crea la connessione al database
    const connection = await mysql.createConnection(
      'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
    );

    // Esegui qui le operazioni desiderate con la connessione al database
    //add id to vulnerability table
    await connection.execute("INSERT INTO user (`nome`,`cognome`,`email`,`permessi`) VALUES (?,?,?,?)", [nome,cognome,email,permessi]);

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
