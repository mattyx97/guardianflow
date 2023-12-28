
// server/api/hello.ts

import * as mysql from "mysql2/promise";
import { type Piano} from "@/types";


export default defineEventHandler(async event => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();
  const uid = session?.user.userId;
  if (!uid) throw createError({ message: "Invalid session", statusCode: 400 });

  try {
    // Crea la connessione al database
    const connection = await mysql.createConnection(
      'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
    );

    console.log("Connected to PlanetScale!");

    // Esegui qui le operazioni desiderate con la connessione al database
    console.log("uid: ", uid);
    const [rows, fields] = await connection.execute(
      "SELECT piano.*,azienda.nome FROM piano INNER JOIN azienda ON azienda.id_piano = piano.id INNER JOIN user ON  azienda.id = user.azienda_id  WHERE azienda.id = ?",
      [uid]
    );
    // Chiudi la connessione dopo aver eseguito le operazioni necessarie
    await connection.end();

    return rows as Anomalia[];
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});