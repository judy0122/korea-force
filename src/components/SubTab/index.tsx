import useSubTab from "./useSubTab";
import { DeliveryTabType } from "src/types/order";
import { deliverys, sorts } from "./values";
import DatePicker from "react-datepicker";

export default function DeliveryTab() {
  const {
    startDate,
    tabIndex,
    counts,
    subTabIndex,
    sortType,
    endDate,
    searchValue,
    onChangeSortType,
    onChangeDeliveryTabIndex,
    onChangeStartDate,
    onChangeEndDate,
    onClickToday,
    onChangeSearchValue,
    onClickSearch,
  } = useSubTab();

  return tabIndex !== -1 ? (
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
  ) : (
    <div className="order_search">
      <div className="day_chk">
        <div className="day_controll">
          <DatePicker
            selected={startDate}
            dateFormat="yy.MM.dd"
            onChange={onChangeStartDate}
          />
        </div>

        <span>~</span>
        <div className="day_controll">
          <DatePicker
            selected={endDate}
            dateFormat="yy.MM.dd"
            onChange={onChangeEndDate}
          />
        </div>
      </div>
      <button className="btn ms blue">조회</button>
      <button className="btn ms default" onClick={onClickToday}>
        오늘
      </button>
      <input
        type="text"
        name="searchWord"
        id="searchWord"
        className="input_txt"
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      <button className="btn ms default" onClick={onClickSearch}>
        검색
      </button>
    </div>
  );
}
