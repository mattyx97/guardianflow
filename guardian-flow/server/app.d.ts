/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/lucia").Auth;
  type DatabaseUserAttributes = {
    username: string;
    two_factor: boolean;
    two_factor_token: string;
    nome: string;
    cognome: string;
    permessi: string;
    azienda_id: number;
  };
  type DatabaseSessionAttributes = {};
}
