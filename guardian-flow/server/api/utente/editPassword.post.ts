export default defineEventHandler(async event => {
  const { password } = await readBody<{
    password: string;
  }>(event);

  // Verifica se la password contiene almeno 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    throw createError({
      message: "La password deve avere almeno 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale",
      statusCode: 400,
    });
  }

  const authRequest = auth.handleRequest(event);
  // Verifica se l'utente è autenticato
  const session = await authRequest.validate();
  if (!session) {
    throw createError({
      message: "Unauthorized",
      statusCode: 401,
    });
  }
  console.log("session", session);
  const username = session?.user.username;
  await auth.updateKeyPassword("username", username, password);
  return new Response(null, {
    status: 200,
  });
});
