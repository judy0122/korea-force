import constate from "constate";
import { useState } from "react";
import { DeliveryType } from "src/types/common";

function useRight() {
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("agent");

  const onChangeDeliveryType = (type: DeliveryType) => {
    setDeliveryType(type);
  };

  return { deliveryType, onChangeDeliveryType };
}

const [Provider, useDeliveryType, useChangeDeliveryType] = constate(
  useRight,
  (value) => value.deliveryType,
  (value) => value.onChangeDeliveryType
);

export { Provider, useDeliveryType, useChangeDeliveryType };
