import {
  useChangeDeliveryTabIndex,
  useChangeOrderType,
  usedeliverytabIndex,
  useOrderType,
} from "src/pages/Main/Provider";
import { OrderType } from "src/types/common";
import { deliverys, orders } from "./values";

export default function DeliveryTab() {
  const deliveryTabIndex = usedeliverytabIndex();
  const orderType = useOrderType();
  const onChangeOrderType = useChangeOrderType();
  const onChangeDeliveryTabIndex = useChangeDeliveryTabIndex();

  return (
    <div className="order_tab">
      <ul className="left_progress tab_type2">
        {deliverys.map((delivery, index) => (
          <li
            key={index}
            className={
              deliveryTabIndex === index ? "btn ms blue" : "btn ms default"
            }
          >
            <button onClick={() => onChangeDeliveryTabIndex(index)}>
              {delivery} <span>0</span>
            </button>
          </li>
        ))}
      </ul>

      <ul className="right_list">
        {orders.map(({ title, value }, index: number) => (
          <li
            key={index}
            className={orderType === value ? "btn ms gray" : "btn ms default"}
          >
            <button onClick={() => onChangeOrderType(value)}>{title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
