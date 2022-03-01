import constate from "constate";
import { useState } from "react";
import { OrderService } from "src/services";
import { DeliveryType } from "src/types/common";
import { OptionType, OrderMenusType, OrderType } from "src/types/order";

function useRight() {
  return {};
}

const [RightProvider] = constate(useRight);

export { RightProvider };
