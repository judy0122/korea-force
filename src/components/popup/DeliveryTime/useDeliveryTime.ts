import { useState } from "react";
import { useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import { DeliveryTimeType } from "src/types/order";

export default function useDeliveryTime() {
  const [time, setTime] = useState<DeliveryTimeType>("즉시");
  const { order } = useSelector((state: RootState) => state.order);

  // 배달 시간 선택
  const onSelectTime = (time: DeliveryTimeType) => {
    setTime(time);
  };

  // 주문 접수
  const onAcceptOrder = async (time: DeliveryTimeType) => {
    await OrderService.acceptOrder(order?.order_cd || "", time);
  };

  return { time, onSelectTime, onAcceptOrder };
}
