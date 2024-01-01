// server/api/hello.ts

import * as mysql from "mysql2/promise";
import { type Utente } from "@/types";

export default defineEventHandler(async event => {
  console.log("getUtenti");
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();
  const aziena_id = session?.user.aziendaId;
  const uid = session?.user.userId;
  if (!uid) throw createError({ message: "Invalid session", statusCode: 400 });

  try {
    // Crea la connessione al database
    const connection = await mysql.createConnection(
      'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
    );

    // Esegui qui le operazioni desiderate con la connessione al database

    const [rows, fields] = await connection.execute("SELECT * FROM user  WHERE azienda_id  = ?", [
      aziena_id,
    ]);
    // Chiudi la connessione dopo aver eseguito le operazioni necessarie
    await connection.end();

    return rows as Utente[];
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
