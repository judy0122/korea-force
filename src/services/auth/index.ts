import { api } from "../configs";

export const AuthApi = {
  async login(data: { id: string; password: string }) {
    const response = await api({
      method: "POST",
      url: "/v1/users/login_new",
      headers: {
        withCredentials: true,
      },
      data,
    });
    return response;
  },
};
