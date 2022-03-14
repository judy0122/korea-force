import {
  AddDeliveryType,
  DeleteDeliveryType,
  DeletePcType,
  ModifyPcType,
  OrderCallRider,
  OrderCallRiderCompany,
} from "src/types/api";
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
  //로그인 기기조회
  async getPcList() {
    try {
      const url = "/v1/settings/pclist";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //기기 수정
  async modifyPc(data: ModifyPcType) {
    try {
      const url = "/v1/settings/pclist/mod";
      await RestService.post(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // 기기 삭제
  async deletePc(data: DeletePcType) {
    try {
      const url = "/v1/settings/pclist/del";
      await RestService.post(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // 버전조회
  async getVersion() {
    try {
      const url = "/v1/settings/versions";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //배달 대행사 조회(리스트)
  async getDeliveryList() {
    try {
      const url = "/v1/settings/delivery";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //배달 대행사 조회(리스트)
  async getDeliveryNewList() {
    try {
      const url = "/v1/settings/delivery/new";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //배달 대행사 삭제
  async deleteDelivery(data: DeleteDeliveryType) {
    try {
      const url = "/v1/settings/delivery/del";
      await RestService.post(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //배달대행사 추가
  async addDelivery(data: AddDeliveryType) {
    try {
      const url = "/v1/settings/delivery/reg";
      await RestService.post(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
