import type { Router } from 'vue-router';

interface iUser {
  id: string;
  email: string;
}

export const useAuth = defineStore("auth", () => {
  const user = ref<iUser | undefined>();
  const isAuth = computed(() => !!user.value);
  const login = async (DTO: { email: string; password: string }, router: Router) => {
    const { email, password } = DTO;
    const result = await account.createEmailPasswordSession(email, password);
    user.value = {
      id: result.userId,
      email,
    };
    router.push({ path: "/admin" });
  };
  const get_me = async () => {
    try {
      const response = await account.get();
      const { email, $id } = response;
      user.value = {
        id: $id,
        email,
      };
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async (router: Router) => {
    await account.deleteSession("current");
    user.value = undefined;
    router.push({ path: "/login" });
  };
  return {
    user,
    isAuth,
    login,
    get_me,
    logout,
  };
});
