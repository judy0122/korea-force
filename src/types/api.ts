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
