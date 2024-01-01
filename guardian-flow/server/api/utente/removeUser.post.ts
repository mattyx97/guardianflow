export default defineEventHandler(async event => {
  const { user_id } = await readBody<{
    user_id: string;
  }>(event);

  try {
    const authRequest = auth.handleRequest(event);
    const session = await authRequest.validate();
    const uid = session?.user.userId;
    if (!uid) throw createError({ message: "Invalid session", statusCode: 400 });
    await auth.deleteUser(user_id);
    return {
      statusCode: 200,
      body: {
        message: `User deleted`,
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
