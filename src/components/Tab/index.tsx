import { useChangeTabIndex, useTabIndex } from "src/pages/Main/Provider";
import { tabs } from "./values";

export default function Tab() {
  const tabIndex = useTabIndex();
  const onChangeTabIndex = useChangeTabIndex();

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
