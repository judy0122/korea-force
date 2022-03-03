import { TabType } from "src/types/order";

const tabs: TabType[] = [
  { name: "배달", value: 1, type: "DELIVERY" },
  { name: "포장", value: 2, type: "TAKEOUT" },
  { name: "테이블오더", value: 3, type: "TABLE" },
  { name: "전체", value: 0, type: "WHOLE" },
  { name: "매출조회", value: -1, type: "SALES" },
];

export { tabs };
