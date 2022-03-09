import tabSlice from "src/store/module/tab/tabSlice";
import { RootState } from "src/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortType } from "src/types/common";
import orderSlice from "src/store/module/order/orderSlice";

export default function useSubTab() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState<SortType>("recent");
  const { subTabIndex, counts } = useSelector((state: RootState) => state.tab);
  const { list } = useSelector((state: RootState) => state.order);
  // 정렬 타입변경
  const onChangeSortType = (type: SortType) => {
    setSortType(type);
    const newList = [...list].reverse();
    dispatch(orderSlice.actions.onChangeList(newList));
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
