import { DeliveryTypes } from "src/types/order";

const deliveryTimes = ["즉시", "15분", "20분", "30분", "40분", "50분"];
const deliveryTypes: DeliveryTypes[] = [
  {
    name: "배달대행사",
    value: "company",
  },
  {
    name: "자체배달",
    value: "self",
  },
];

export { deliveryTimes, deliveryTypes };
