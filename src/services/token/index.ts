import { STORAGE_TOKEN_KEY } from "src/configs";

class TokenService {
  getToken = () => localStorage.getItem(STORAGE_TOKEN_KEY);
  setToken = (token: string) => localStorage.setItem(STORAGE_TOKEN_KEY, token);
}

export default new TokenService();
