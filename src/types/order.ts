import { OrderStatusType } from "./api";

export type DeliveryMethodsType = { title: string; value: DeliveryType };

export type OrdersType = {
  order_cd: string;
  order_dtime: string;
  order_menus: [
    {
      menu_cd: number;
      menu_name: string;
      menu_price_cd: number;
      menu_price_name: string;
      menu_price_amount: number;
      option_list: [
        {
          option_group_cd: number;
          option_group_name: string;
          options: [
            {
              option_cd: number;
              option_name: string;
              option_amount: number;
            }
          ];
        }
      ];
      count: number;
    }
  ];
  order_amount: number;
  order_tip_amount: number;
  order_pay_amount: number;
  pay_method: string;
  order_delivgb: string;
  order_status: string;
  reqmsg: 1 | 0; //메세지잇음(1),없음(0),
  level_gubun: string;
  regular_count: string;
  order_predtime: number;
  remaining_time: number;
  order_reqmsg: string;
  order_delivmsg: string;
  order_addr_doro: string;
  order_addr_jibun: string;
  order_addr_detail: string;
  order_safetel: 1 | 0; // 가상번호사용여부(1/0),
  order_safe_telno: string;
  order_tel: string;
  order_point: number;
  order_coupon: number;
  order_stamp: number;
  order_pickup_amount: number;
  order_disposable: 1 | 0; //1회용품미사용여부(1:미사용,0:사용),
  order_discount: [];
};

export type OrderType = {
  shop_cd: string;
  shop_name: string;
  order_cd: string;
  order_status: string;
  order_amount: number;
  order_coupon: number;
  order_point: number;
  order_stamp: number;
  order_tip_amount: number;
  order_pay_amount: number;
  order_menus: OrderMenusType[];
  pay_method: string;
  order_addr_doro: string;
  order_addr_jibun: string;
  order_addr_detail: string;
  order_reqmsg: string;
  order_delivmsg: string;
  order_cancel_msg: string;
  order_dtime: string;
  order_accept_dtime: string;
  order_complete_dtime: string;
  order_cancel_dtime: string;
  order_tel: string;
  order_safetel: string;
  order_safe_telno: string;
  order_predtime: string;
  rem_minute: string;
  order_disposable: string;
  order_pickup_amount: number;
  shop_regular: number;
  additional_msg?: string;
};

export type OrderMenusType = {
  menu_cd: string;
  menu_name: string;
  menu_price_cd: number;
  menu_price_name: string;
  menu_price_amount: number;
  option_list: OptionType[];
  count: number;
};

export type OptionType = {
  option_group_cd: number;
  option_group_name: string;
  options: {
    option_cd: number;
    option_name: string;
    option_amount: number;
  }[];
};

// 주문 거절 이유
export type RejectMsgType =
  | "매장사정 취소"
  | "재료소진"
  | "조리지연"
  | "메뉴 및 업소정보 오류"
  | "요청사항 불가"
  | "기타사유";

// 배달시간
export type DeliveryTimeType =
  | "즉시"
  | "10분"
  | "20분"
  | "30분"
  | "40분"
  | "50분"
  | "60분"
  | "90분"
  | "120분";

export type CookingTimeType =
  | "즉시"
  | "10분"
  | "20분"
  | "30분"
  | "40분"
  | "50분"
  | "60분";

export type TabType = { name: string; value: number; type: TabOrderType };

export type TabOrderType = "DELIVERY" | "TAKEOUT" | "TABLE" | "WHOLE" | "SALES";

export type DeliveryTabType = { name: string; value: OrderStatusType | null };

export type DeliveryTypes = { name: string; value: DeliveryType };
export type DeliveryType = "company" | "self";
