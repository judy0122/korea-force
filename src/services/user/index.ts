import { api } from "../configs";
import RestService from "../RestService";

export const UserService = {
  async login(data: { id: string; password: string }) {
    return await api({
      method: "POST",
      url: "/v1/users/login_new",
      data,
    });
  },
  // 로그아웃
  async logout() {
    try {
      const url = "/v1/users/logout";
      await RestService.get(url);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
