import constate from "constate";
import { useState } from "react";
import { OrderType } from "src/types/common";

function useMain() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [deliverytabIndex, setDeliveryTabIndex] = useState<number>(0);
  const [orderType, setOrderType] = useState<OrderType>("recent");

  const onChangeTabIndex = (index: number) => {
    setTabIndex(index);
  };

  const onChangeDeliveryTabIndex = (index: number) => {
    setDeliveryTabIndex(index);
  };

  const onChangeOrderType = (type: OrderType) => {
    setOrderType(type);
  };

  return {
    tabIndex,
    deliverytabIndex,
    orderType,
    onChangeTabIndex,
    onChangeDeliveryTabIndex,
    onChangeOrderType,
  };
}

const [
  Provider,
  useTabIndex,
  usedeliverytabIndex,
  useOrderType,
  useChangeTabIndex,
  useChangeDeliveryTabIndex,
  useChangeOrderType,
] = constate(
  useMain,
  (value) => value.tabIndex,
  (value) => value.deliverytabIndex,
  (value) => value.orderType,
  (value) => value.onChangeTabIndex,
  (value) => value.onChangeDeliveryTabIndex,
  (value) => value.onChangeOrderType
);

export {
  Provider,
  useTabIndex,
  usedeliverytabIndex,
  useOrderType,
  useChangeTabIndex,
  useChangeDeliveryTabIndex,
  useChangeOrderType,
};
