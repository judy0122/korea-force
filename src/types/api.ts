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

export type OrderStatusType = "standby" | "ing" | "complete";
