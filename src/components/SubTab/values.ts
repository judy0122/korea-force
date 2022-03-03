import { SortType } from "src/types/common";
import { DeliveryTabType } from "src/types/order";

const deliverys: DeliveryTabType[] = [
  { name: "대기", value: "standby" },
  { name: "처리중", value: "ing" },
  { name: "배달", value: null },
  { name: "완료", value: "complete" },
];
const sorts: {
  title: string;
  value: SortType;
}[] = [
  {
    title: "최근순",
    value: "recent",
  },
  {
    title: "과거순",
    value: "order",
  },
];

export { deliverys, sorts };
