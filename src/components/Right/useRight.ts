import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { DeliveryType } from "src/types/common";
import { OrderType } from "src/types/order";

export default function useRight() {
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("agent");
  const tabState = useSelector((state: RootState) => state.tab);
  const { order }: { order: OrderType | null } = useSelector(
    (state: RootState) => state.order
  );

  const onChangeDeliveryType = (type: DeliveryType) => {
    setDeliveryType(type);
  };

  return {
    deliveryType,
    onChangeDeliveryType,
    deliverytabIndex: tabState.subTabIndex,
    order,
  };
}
