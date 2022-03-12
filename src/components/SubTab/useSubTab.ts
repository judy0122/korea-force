import tabSlice from "src/store/module/tab/tabSlice";
import { RootState } from "src/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortType } from "src/types/common";
import orderSlice from "src/store/module/order/orderSlice";

export default function useSubTab() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState<SortType>("recent");
  const { subTabIndex, counts, tabIndex } = useSelector(
    (state: RootState) => state.tab
  );
  const { list } = useSelector((state: RootState) => state.order);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [searchValue, setSearchValue] = useState<string>("");

  // 정렬 타입변경
  const onChangeSortType = (type: SortType) => {
    setSortType(type);
    const newList = [...list].reverse();
    dispatch(orderSlice.actions.onChangeList(newList));
  };

  const onChangeDeliveryTabIndex = (index: number) => {
    dispatch(tabSlice.actions.onChangeSubTabIndex(index));
  };

  // 매출조회 > 시작날짜 변경
  const onChangeStartDate = (date: Date) => {
    setStartDate(date);
  };
  // 매출조회 > 끝날짜 변경
  const onChangeEndDate = (date: Date) => {
    setEndDate(date);
  };

  // 매출조회 > 오늘 클릭
  const onClickToday = () => {
    setStartDate(new Date());
    setEndDate(new Date());
  };

  // 매출조회 > 검색어 입력
  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 매출조회 > 검색 버튼 클릭
  const onClickSearch = () => {
    // TODO 검색
  };

  return {
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
  };
}
