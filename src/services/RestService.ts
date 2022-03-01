import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "./configs";
import TokenService from "./token";

class RestApi {
  getRequestConfig = async (isSecureRequest: boolean, customConfig?: any) => {
    let config: AxiosRequestConfig = {};
    if (customConfig) {
      config = Object.assign(config, customConfig);
    }

    if (isSecureRequest) {
      const accessToken = await TokenService.getToken();
      if (accessToken) {
        config = {
          baseURL: `${baseURL}`,
          headers: {
            Authorization: `${accessToken}`,
            withCredentials: true,
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
          },
        };
      }
    }
    return config;
  };

  get = async (url: string, data?: any) => {
    const config = await this.getRequestConfig(
      true,
      data && {
        data,
      }
    );
    return axios.get(url, config);
  };

  post = async (url: string, data: any) => {
    const config = await this.getRequestConfig(true);
    return axios.post(url, data, config);
  };

  put = async (url: string, data = null) => {
    const config = await this.getRequestConfig(true);
    return axios.put(url, data, config);
  };

  delete = async (url: string) => {
    const config = await this.getRequestConfig(true);
    return axios.delete(url, config);
  };
}

export default new RestApi();
