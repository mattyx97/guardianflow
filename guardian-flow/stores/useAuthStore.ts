import { signInWithEmailAndPassword, type User, onAuthStateChanged } from "firebase/auth";

export default defineStore("auth", () => {
  const { auth } = useFirebase();
  const user = ref<User | null | undefined>();

  /* INIT */
  onAuthStateChanged(auth, u => {
    user.value = u;
  });

  /* FUNCTIONS */
  async function login(credentials: { email: string; password: string }) {
    const { email, password } = credentials;
    const res = await signInWithEmailAndPassword(auth, email, password);
    user.value = res.user;
  }
  async function logout() {
    await auth.signOut();
    user.value = null;
  }
  async function getUser() {
    if (user.value !== undefined) return user.value;

    return new Promise<User | null>(resolve => {
      const unwatch = watch(user, u => {
        unwatch();
        resolve(u!);
      });
    });
  }

  return {
    user: readonly(user),
    login,
    logout,
    getUser,
  };
});
