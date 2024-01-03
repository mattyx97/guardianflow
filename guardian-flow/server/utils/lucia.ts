import { lucia } from "lucia";
import { h3 } from "lucia/middleware";
import "lucia/polyfill/node";

import { planetscale } from "@lucia-auth/adapter-mysql";
import { connect } from "@planetscale/database";

const connection = connect({
  host: "aws.connect.psdb.cloud",
  username: "c5lv9jv7jcocax04gncj",
  password: "pscale_pw_zr6YE9l2OQpSSM6XXSz8yXSJht6rEbSO4toNsRMBQup",
});

export const auth = lucia({
  adapter: planetscale(connection, {
    user: "user",
    key: "user_key",
    session: "user_session",
  }),
  middleware: h3(),
  env: process.dev ? "DEV" : "PROD",
  getUserAttributes: data => {
    return {
      username: data.username,
      twoFactorEnabled: data.two_factor,
      twoFactorToken: data.two_factor_token,
      nome: data.nome,
      cognome: data.cognome,
      permessi: data.permessi,
      aziendaId: data.azienda_id,
    };
  },
});

export type Auth = typeof auth;
