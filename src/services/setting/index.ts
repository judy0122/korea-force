import { OrderCallRider, OrderCallRiderCompany } from "src/types/api";
import RestService from "../RestService";

export const SettingService = {
  //매장리스트조회
  async getShop() {
    try {
      const url = "/v1/settings/shop";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //배달 대행사 조회
  async getDelivery() {
    try {
      const url = "/v1/settings/delivery";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // 라이더 호출
  async callRider(data: OrderCallRider) {
    try {
      const url = "/v1/orders/rider/call";
      await RestService.post(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // 라이더호출(배달대행사지정)
  async callRiderCompany(data: OrderCallRiderCompany) {
    try {
      const url = "/v1/orders/rider/call/new";
      await RestService.post(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
