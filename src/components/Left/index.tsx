import Contents from "../Contents";
import Tab from "../Tab";
import { SubTab } from "..";
import { LeftProvider } from "./Provider";

export default function Left() {
  return (
    <LeftProvider>
      <div className="left_tab">
        <Tab />
        <div className="order_info">
          <SubTab />
          <Contents />
        </div>
      </div>
    </LeftProvider>
  );
}
