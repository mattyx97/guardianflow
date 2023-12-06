export default defineNuxtRouteMiddleware(async (to, _) => {
  // skip middleware if not gestionale or login page
  if (!to.path.startsWith("/gestionale")) return;

  // skip middleware if not server

  // get user from store
  const user = await useAuthStore().getUser();

  // redirect to login if user is not logged in
  if (!user) {
    if (to.path != "/gestionale/login") return navigateTo("/gestionale/login");
  } else {
    if (to.path == "/gestionale/login") return navigateTo("/gestionale/");
  }
});
