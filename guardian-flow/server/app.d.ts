/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/lucia").Auth;
  type DatabaseUserAttributes = {
    username: string;
    two_factor: boolean;
  };
  type DatabaseSessionAttributes = {};
}
