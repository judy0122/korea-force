import { OrderType } from "src/types/common";

const deliverys: string[] = ["대기", "처리중", "배달", "완료"];
const orders: {
  title: string;
  value: OrderType;
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

export { deliverys, orders };
