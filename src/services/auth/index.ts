import { api } from "../configs";

export const AuthService = {
  async login(data: { id: string; password: string }) {
    return await api({
      method: "POST",
      url: "/v1/users/login_new",
      data,
    });
  },
};
