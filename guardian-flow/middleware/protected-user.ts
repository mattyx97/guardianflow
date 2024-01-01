export default defineNuxtRouteMiddleware(async () => {
  const user = useUser();

  if (!user.value) return navigateTo("/login");
  if(user.value?.permessi !== "admin") return navigateTo("/gestionale/dashboard");
});
