import { Resend } from "resend";

export default defineEventHandler(async event => {
  const resend = new Resend("re_GMGHNNfW_7yEcQE5PdPH3rip1Bu1Um8az");

  const { username, password, nome, cognome, permessi, azienda_id } = await readBody<{
    username: string;
    password: string;
    nome: string;
    cognome: string;
    permessi: string;
    azienda_id: number;
  }>(event);
  const two_factor = false;
  const two_factor_token = "";
  console.log("username", username);
  console.log("password", password);
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
  try {
    const user = await auth.createUser({
      key: {
        providerId: "username", // auth method
        providerUserId: username.toLowerCase(), // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        username,
        two_factor,
        two_factor_token,
        nome,
        cognome,
        permessi,
        azienda_id,
      },
    });

    (async function () {
      const { data, error } = await resend.emails.send({
        from: "Guardian Flow <onboarding@resend.dev>",
        to: ["gremsrls@gmail.com"],
        subject: "Benvenuto dal team di Guardian Flow!",
        html:
          "La tua password è: " +
          password +
          " <br> <a href='http://localhost:3000'>Clicca qui per accedere</a>",
      });

      if (error) {
        return console.error({ error });
      }

      console.log({ data });
    })();

    return {
      statusCode: 200,
      body: {
        message: `User ${user.username} created`,
      },
    };
  } catch (e: any) {
    // check for unique constraint error in user table

    console.log(e);
    throw createError({
      message: e.message,
      statusCode: 500,
    });
  }
});
