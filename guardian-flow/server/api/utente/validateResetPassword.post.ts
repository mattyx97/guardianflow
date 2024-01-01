//@ts-nocheck
import { generateRandomString, isWithinExpiration } from "lucia/utils";
import * as mysql from "mysql2/promise";

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export default defineEventHandler(async event => {
    const { token,password } = await readBody<{
        token: string;
        password: string;
      }>(event);
    const connection = await mysql.createConnection(
        'mysql://c5lv9jv7jcocax04gncj:pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup@aws.connect.psdb.cloud/guardianflow?ssl={"rejectUnauthorized":true}'
      );

  
      // Esegui qui le operazioni desiderate con la connessione al database
      //add id to vulnerability table
      const [rows, fields] = await connection.execute(
        "SELECT * FROM password_reset_token WHERE id = ?",
        [token]
      );
     
      if (rows?.length === 0) return createError({ message: "Invalid token", statusCode: 400 });
      const storedToken = rows[0];
      const tokenExpires = Number(storedToken.expires); // bigint => number conversion
      if (!isWithinExpiration(tokenExpires)) {
          throw new Error("Expired token");
      }
     
        const userId = storedToken.user_id;
        let user = await auth.getUser(userId);
        await auth.invalidateAllUserSessions(userId);
        await auth.updateKeyPassword("username", user?.username, password);
	
	return token;
});
