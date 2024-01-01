//@ts-nocheck
import { generateRandomString, isWithinExpiration } from "lucia/utils";
import * as mysql from "mysql2/promise";
import { Resend } from "resend";


const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export default defineEventHandler(async event => {
  const resend = new Resend("re_GMGHNNfW_7yEcQE5PdPH3rip1Bu1Um8az");

    const { username } = await readBody<{
        username: string;
      }>(event);
      console.log("userId: ", username);
    const connection = await mysql.createConnection(
        'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
      );

      //get user id
      const [rowsUser, fieldsUser] = await connection.execute(
        "SELECT * FROM user WHERE username = ?",
        [username]
      );
      const userId = rowsUser[0].id;

  
      // Esegui qui le operazioni desiderate con la connessione al database
      //add id to vulnerability table
      const [rows, fields] = await connection.execute(
        "SELECT * FROM password_reset_token WHERE user_id = ?",
        [userId]
      );

   

	if (rows?.length > 0) {
		const reusableStoredToken = rows.find((token) => {
			// check if expiration is within 1 hour
			// and reuse the token if true
			return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
		});

    (async function () {
      const { data, error } = await resend.emails.send({
        from: "Guardian Flow <onboarding@resend.dev>",
        to: ["gremsrls@gmail.com"],
        subject: "Link reimpostazione password",
        html:
          "Il link è: " +
          "http://localhost:3000/new-password?token=" +reusableStoredToken.id,
          
      });

      if (error) {
        return console.error({ error });
      }

      console.log({ data });
    })();
    
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
    await connection.execute(
        "INSERT INTO password_reset_token (id,expires,user_id) VALUES (?, ?, ?)",
        [token, new Date().getTime() + EXPIRES_IN, userId]
      );
      await connection.end();
      (async function () {
        const { data, error } = await resend.emails.send({
          from: "Guardian Flow <onboarding@resend.dev>",
          to: ["gremsrls@gmail.com"],
          subject: "Link reimpostazione password",
          html:
            "Il link è: " +
            "http://localhost:3000/new-password?token=" +token,
            
        });
  
        if (error) {
          return console.error({ error });
        }
  
        console.log({ data });
      })();
	
	return token;
});
