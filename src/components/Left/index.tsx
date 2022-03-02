import Contents from "../Contents";
import Tab from "../Tab";
import { SubTab } from "..";

export default function Left() {
  return (
    <div className="left_tab">
      <Tab />
      <div className="order_info">
        <SubTab />
        <Contents />
      </div>
    </div>
  );
}
