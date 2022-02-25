export type OrderType = "recent" | "order";

export type LoginResponse = {
  auth_token: string;
  biz_acc_cd: string;
  biz_name: string;
  shop_cd: string;
};

export type DeliveryType = "agent" | "self";
