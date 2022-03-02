import { useEffect, useState } from "react";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import { useSelector, useDispatch } from "react-redux";
import tabSlice from "src/store/module/tab/tabSlice";
import { SortType } from "src/types/common";

const dummyData = [
  {
    order_status: "주문구분(1:주문대기,2:처리중, 3:완료)",
    order_cnt: "주문횟수",
  },
];

export default function useTab() {
  const [counts, setCounts] = useState<number[]>([]);
  const dispatch = useDispatch();
  const tabState = useSelector((state: RootState) => state.tab);
  const [sortType, setSortType] = useState<SortType>("recent");

  const getOrderCount = async () => {
    const reponse = await OrderService.getCount(0);
    //  TODO dummy data 만들어서 구현하기...
  };

  const onChangeTabIndex = (index: number) => {
    dispatch(tabSlice.actions.onChangeTabIndex(index));
    // TODO 주문 정보 가져오기..
  };

  // 정렬 타입변경
  const onChangeSortType = (type: SortType) => {
    setSortType(type);
  };

  /*
   * Sub Tab
   */
  const onChangeDeliveryTabIndex = (index: number) => {
    dispatch(tabSlice.actions.onChangeSubTabIndex(index));
  };

  useEffect(() => {
    getOrderCount();
  }, []);

  return {
    counts,
    tabIndex: tabState.tabIndex,
    subTabIndex: tabState.subTabIndex,
    sortType,
    onChangeTabIndex,
    onChangeSortType,
    onChangeDeliveryTabIndex,
  };
}
