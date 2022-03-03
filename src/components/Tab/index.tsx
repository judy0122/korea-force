import { TabType } from "src/types/order";
import useTab from "./useTab";
import { tabs } from "./values";

export default function Tab() {
  const { tabIndex, onChangeTabIndex } = useTab();

  //TODO 주문현황 숫자 받아오는거 물어보기

  return (
    <div className="tab tab_type1">
      <ul>
        {tabs.map(({ name, value, type }: TabType, index) => (
          <li
            key={index}
            className={value === tabIndex ? "btn m blue" : "btn m lightgray"}
          >
            <button onClick={() => onChangeTabIndex(value, type)}>
              {name} <span className="round_red">2</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
