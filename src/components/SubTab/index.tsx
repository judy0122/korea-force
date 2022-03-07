import useSubTab from "./useSubTab";
import { DeliveryTabType } from "src/types/order";
import { deliverys, sorts } from "./values";

export default function DeliveryTab() {
  const {
    counts,
    subTabIndex,
    sortType,
    onChangeSortType,
    onChangeDeliveryTabIndex,
  } = useSubTab();

  return (
    <div className="order_tab">
      <ul className="left_progress tab_type2">
        {deliverys.map(({ name, value }: DeliveryTabType, index) => (
          <li
            key={index}
            className={subTabIndex === index ? "btn ms blue" : "btn ms default"}
          >
            <button onClick={() => onChangeDeliveryTabIndex(index)}>
              {name} <span>{counts[index]}</span>
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
