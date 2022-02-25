import {
  Header,
  Tab,
  DeliveryTab,
  DeliveryContents,
  NewOrder,
  Right,
} from "src/components";
import { Provider } from "./Provider";

export default function Main() {
  return (
    <Provider>
      <Header />
      <div className="order_info_cont">
        <div className="left_tab">
          <Tab />
          <div className="order_info">
            <DeliveryTab />
            <DeliveryContents />
          </div>
        </div>
        <Right />
        <NewOrder />
      </div>
    </Provider>
  );
}
