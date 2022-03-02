import useTab from "../Tab/useTab";
import { deliverys, sorts } from "./values";

export default function DeliveryTab() {
  const { subTabIndex, sortType, onChangeSortType, onChangeDeliveryTabIndex } =
    useTab();

  return (
    <div className="order_tab">
      <ul className="left_progress tab_type2">
        {deliverys.map((delivery, index) => (
          <li
            key={index}
            className={subTabIndex === index ? "btn ms blue" : "btn ms default"}
          >
            <button onClick={() => onChangeDeliveryTabIndex(index)}>
              {delivery} <span>0</span>
            </button>
          </li>
        ))}
      </ul>

      <ul className="right_list">
        {sorts.map(({ title, value }, index: number) => (
          <li
            key={index}
            className={sortType === value ? "btn ms gray" : "btn ms default"}
          >
            <button onClick={() => onChangeSortType(value)}>{title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
