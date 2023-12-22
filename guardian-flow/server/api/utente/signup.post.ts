import { Resend } from "resend";

import * as mysql from "mysql2/promise";
export default defineEventHandler(async event => {
  const resend = new Resend("re_GMGHNNfW_7yEcQE5PdPH3rip1Bu1Um8az");

  const { username, password, nomeAzienda, emailAzienda, p_iva, telefono, nome, cognome,id_piano } =
    await readBody<{
      username: string;
      password: unknown;
      nomeAzienda: string;
      nome: string;
      cognome: string;
      emailAzienda: string;
      p_iva: string;
      telefono: string;
      id_piano: number;
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
  if (typeof nomeAzienda !== "string" || nomeAzienda.length < 4 || nomeAzienda.length > 31) {
    throw createError({
      message: "Invalid nomeAzienda",
      statusCode: 400,
    });
  }
  if (typeof emailAzienda !== "string" || emailAzienda.length < 2 || emailAzienda.length > 31) {
    throw createError({
      message: "Invalid emailAzienda",
      statusCode: 400,
    });
  }
  if (typeof p_iva !== "string" || p_iva.length < 4 || p_iva.length > 31) {
    throw createError({
      message: "Invalid p_iva",
      statusCode: 400,
    });
  }
  if (typeof telefono !== "string" || telefono.length < 4 || telefono.length > 31) {
    throw createError({
      message: "Invalid telefono",
      statusCode: 400,
    });
  }
  try {
    //create azienda
    const connection = await mysql.createConnection(
      'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
    );

    await connection.execute(
      "INSERT INTO azienda (nome,email,p_iva,telefono,id_piano) VALUES (?, ?, ?, ?, ?)",
      [nomeAzienda, emailAzienda, p_iva, telefono,id_piano]
    );
    const [rows, fields] = await connection.execute("SELECT LAST_INSERT_ID()");
    console.log("rows", rows);
    //@ts-ignore
    const azienda_id = rows[0]["LAST_INSERT_ID()"];
    // create user
    const user = await auth.createUser({
      key: {
        providerId: "username", // auth method
        providerUserId: username.toLowerCase(), // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        username,
        two_factor: false,
        two_factor_token: "",
        nome: nome,
        cognome: cognome,
        permessi: "admin",
        azienda_id: azienda_id,
      },
    });
    // const session = await auth.createSession({
    //   userId: user.userId,
    //   attributes: {},
    // });
    // const authRequest = auth.handleRequest(event);
    // authRequest.setSession(session);

    (async function () {
      const { data, error } = await resend.emails.send({
        from: "Guardian Flow <onboarding@resend.dev>",
        to: ["gremsrls@gmail.com"],
        subject: "Benvenuto dal team di Guardian Flow!",
        html:
          "La tua password è: " +
          password +
          " <br> <a href='http://localhost:3000/gestionale/dashboard'>Clicca qui per accedere</a>",
      });

      if (error) {
        return console.error({ error });
      }

      console.log({ data });
    })();

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
