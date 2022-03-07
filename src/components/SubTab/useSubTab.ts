import tabSlice from "src/store/module/tab/tabSlice";
import { RootState } from "src/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortType } from "src/types/common";

export default function useSubTab() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState<SortType>("recent");
  const { subTabIndex, counts } = useSelector((state: RootState) => state.tab);
  // 정렬 타입변경
  const onChangeSortType = (type: SortType) => {
    setSortType(type);
  };

  const onChangeDeliveryTabIndex = (index: number) => {
    dispatch(tabSlice.actions.onChangeSubTabIndex(index));
  };

  return {
    counts,
    subTabIndex,
    sortType,
    onChangeSortType,
    onChangeDeliveryTabIndex,
  };
}
