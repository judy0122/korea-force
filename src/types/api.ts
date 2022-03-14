//user
export type UserType = {
  biz_acc_cd: string;
  shop_cd: string;
  biz_name: string;
  auth_token: string;
};

//login
export type LoginResponse = {
  auth_token: string;
  biz_acc_cd: string;
  biz_name: string;
  shop_cd: string;
};

// 주문 수량 조회
export type OrderDeliveryType = {
  WHOLE: 0; // "전체";
  DELIVERY: 1; // "배달";
  TAKEOUT: 2; // "포장";
  HALL: 3; // "매장식사";
  "DELIVERY/TAKEOUT": 4; // "배달/포장";
  "DELIVERY/HALL": 5; // "배달/매장식사";
  "TAKEOUT/HALL": 6; // "포장/매장식사";
  NONE: 9; // "미선택";
};

export type OrderCallRider = {
  shop_cd: string;
  order_cd: string;
  reserve_yn: string;
  reserve_minute: string;
};

export type OrderCallRiderCompany = {
  shop_cd: string;
  order_cd: string;
  delivery_comp_cd: string;
  reserve_yn: string;
  reserve_minute: string;
};

export type OrderStatusType = "standby" | "ing" | "complete";

//기기 수정
export type ModifyPcType = {
  device_name: string;
  device_code: string;
};
//기기 삭제
export type DeletePcType = { device_code: string };

// 배달대행 목록
export type DeliveryType = {
  delivery_alias: string;
  delivery_comp_cd: string;
  delivery_comp_nm: string;
  delivery_shop_cd: string;
  shop_cd: number;
};

// 배달대행 삭제
export type DeleteDeliveryType = {
  shop_cd: number;
  delivery_comp_cd: string;
  delivery_shop_cd: string;
};
// 배달대행 추가
export type AddDeliveryType = {
  delivery_alias: string;
  delivery_comp_cd: string;
  delivery_shop_cd: string;
  shop_cd: number;
};
