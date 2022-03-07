import tabSlice from "src/store/module/tab/tabSlice";
import { useEffect } from "react";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import { useSelector, useDispatch } from "react-redux";
import { OrderStatusType } from "src/types/api";
import orderSlice from "src/store/module/order/orderSlice";
import { deliverys } from "../SubTab/values";

export default function useTab() {
  const dispatch = useDispatch();
  const { tabIndex, counts, subTabIndex } = useSelector(
    (state: RootState) => state.tab
  );
  const { pageIndex } = useSelector((state: RootState) => state.order);

  const getOrderCount = async (tabIndex: number) => {
    const newCount = [0, 0, 0, 0];
    const reponse = await OrderService.getCount(tabIndex);
    reponse.map(({ order_status, order_cnt }: any) => {
      if (order_status === "1") {
        newCount[0] = order_cnt;
      }
      if (order_status === "2") {
        newCount[1] = order_cnt;
      }
      if (order_status === "3") {
        newCount[3] = order_cnt;
      }
    });
    dispatch(tabSlice.actions.onChangeCount(newCount));
  };

  const onChangeTabIndex = (index: number, type: string) => {
    dispatch(tabSlice.actions.onChangeTab({ tabIndex: index, tabType: type }));
  };

  // 목록 조회
  const getList = async (
    type: number,
    status: OrderStatusType,
    isinit?: boolean
  ) => {
    const data = await OrderService.getList(type, pageIndex, status);
    dispatch(orderSlice.actions.onChangeList(data || []));
    if (isinit) {
      dispatch(orderSlice.actions.onChangeSelectedOrder(0));
    }
  };

  useEffect(() => {
    dispatch(orderSlice.actions.onResetOrder());
    const status = deliverys[subTabIndex]?.value;

    if (tabIndex !== -1 && status) {
      getList(tabIndex, status, true);
      getOrderCount(tabIndex);
    }
  }, [tabIndex, subTabIndex]);

  return {
    counts,
    tabIndex,
    onChangeTabIndex,
  };
}
