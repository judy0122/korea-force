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
};
