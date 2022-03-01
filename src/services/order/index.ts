import { DeliveryTimeType, RejectMsgType } from "src/types/order";
import RestService from "../RestService";

export const OrderService = {
  //주문내역 갯수조회
  async getCount(order_delivgb: number) {
    try {
      const url = `/v1/orders/count?order_delivgb=${order_delivgb}`;
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  //접수대기 리스트
  async getWaitingList(order_delivgb: number, current_page: number) {
    try {
      const url = `/v1/orders/standby/list?order_delivgb=${order_delivgb}&current_page=${current_page}`;
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  // 처리중 리스트
  async getIngList(order_delivgb: number, current_page: number) {
    try {
      const url = `/v1/orders/ing/list?order_delivgb=${order_delivgb}&current_page=${current_page}`;
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  // 주문 상세조회
  async getOrder(order_cd: string) {
    try {
      const url = `/v1/orders/detail?order_cd=${order_cd}`;
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  /// 주문 거부
  async rejectOrder(order_cd: string, order_reject_msg: RejectMsgType) {
    try {
      const url = "/v1/orders/reject";
      await RestService.post(url, { order_cd, order_reject_msg });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  // 주문 접수
  async acceptOrder(order_cd: string, order_predtime: DeliveryTimeType) {
    try {
      const url = " ​/v1​/orders​/accept";
      await RestService.post(url, { order_cd, order_predtime });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
