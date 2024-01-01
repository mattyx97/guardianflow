export default defineEventHandler(async event => {
  const { password } = await readBody<{
    password: string;
  }>(event);

  const authRequest = auth.handleRequest(event);
  // check if user is authenticated
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
