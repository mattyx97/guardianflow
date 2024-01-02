/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/lucia").Auth;
  type DatabaseUserAttributes = {
    username: string;
    two_factor: boolean;
    two_factor_token: string;
  };
  type DatabaseSessionAttributes = {};
}
