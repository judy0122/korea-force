import useTab from "./useTab";
import { tabs } from "./values";

export default function Tab() {
  const { tabIndex, onChangeTabIndex } = useTab();

  //TODO 주문현황 숫자 받아오는거 물어보기

  return (
    <div className="tab tab_type1">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === tabIndex ? "btn m blue" : "btn m lightgray"}
          >
            <button onClick={() => onChangeTabIndex(index)}>
              {tab} <span className="round_red">2</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
