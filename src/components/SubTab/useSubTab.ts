import tabSlice from "src/store/module/tab/tabSlice";
import orderSlice from "src/store/module/order/orderSlice";
import { RootState } from "src/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { OrderStatusType } from "src/types/api";
import { SortType } from "src/types/common";

export default function useSubTab() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState<SortType>("recent");
  const { subTabIndex, tabIndex, counts } = useSelector(
    (state: RootState) => state.tab
  );
  const { pageIndex } = useSelector((state: RootState) => state.order);

  // 정렬 타입변경
  const onChangeSortType = (type: SortType) => {
    setSortType(type);
  };

  const onChangeDeliveryTabIndex = (
    index: number,
    value: OrderStatusType | null
  ) => {
    dispatch(tabSlice.actions.onChangeSubTabIndex(index));
    if (value && tabIndex !== -1) {
      getList(value);
    }
  };

  // 목록 조회
  const getList = async (status: OrderStatusType) => {
    dispatch(orderSlice.actions.onResetOrder());
    const data = await OrderService.getList(tabIndex, pageIndex, status);
    dispatch(orderSlice.actions.onChangeList(data || []));
    if (data) {
      dispatch(orderSlice.actions.onChangeSelectedOrder(0));
    }
  };

  return {
    counts,
    subTabIndex,
    sortType,
    onChangeSortType,
    onChangeDeliveryTabIndex,
  };
}
