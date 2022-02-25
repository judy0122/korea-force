import constate from "constate";
import { useEffect, useState } from "react";
import { ManageService } from "src/services/manage";
import { OrderType, StatusType } from "src/types/common";

function useMain() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [deliverytabIndex, setDeliveryTabIndex] = useState<number>(0);
  const [orderType, setOrderType] = useState<OrderType>("recent");
  const [status, setStatus] = useState<StatusType>("ING");

  const onChangeTabIndex = (index: number) => {
    setTabIndex(index);
  };

  const onChangeDeliveryTabIndex = (index: number) => {
    setDeliveryTabIndex(index);
  };

  const onChangeOrderType = (type: OrderType) => {
    setOrderType(type);
  };

  const getUserInfo = async () => {
    try {
      const { data } = await ManageService.getStatus();
      const { istmpstop } = data.data;
      if (istmpstop === 1) {
        setStatus("TEMPSTOP");
      } else {
        setStatus("ING");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return {
    tabIndex,
    deliverytabIndex,
    orderType,
    status,
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
  useStatus,
  useChangeTabIndex,
  useChangeDeliveryTabIndex,
  useChangeOrderType,
] = constate(
  useMain,
  (value) => value.tabIndex,
  (value) => value.deliverytabIndex,
  (value) => value.orderType,
  (value) => value.status,
  (value) => value.onChangeTabIndex,
  (value) => value.onChangeDeliveryTabIndex,
  (value) => value.onChangeOrderType
);

export {
  Provider,
  useTabIndex,
  usedeliverytabIndex,
  useOrderType,
  useStatus,
  useChangeTabIndex,
  useChangeDeliveryTabIndex,
  useChangeOrderType,
};
