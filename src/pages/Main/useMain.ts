import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ManageService, OrderService } from "src/services";
import { RootState } from "src/store";
import listSlice from "src/store/module/list/listSlice";
import orderSlice from "src/store/module/order/orderSlice";
import { ListType } from "src/types/api";
import { StatusType } from "src/types/common";
import { OrdersType, OrderType } from "src/types/order";
import { dummyData, dummyOrder } from "./values";

export default function useMain() {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [status, setStatus] = useState<StatusType>("ING");
  const { selectedOrder } = useSelector((state: RootState) => state.order);
  const list = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  // TODO:주문대기 목록 가져오기
  const getDeliveryList = async (type: ListType, isinit?: boolean) => {
    const data = await OrderService.getWaitingList(0, pageIndex);
    dispatch(listSlice.actions.onChangeList(dummyData));
    if (isinit) {
      dispatch(orderSlice.actions.onChangeSelectedOrder(0));
    }
  };

  const getShopStatus = async () => {
    const { istmpstop } = await ManageService.getStatus();
    if (istmpstop === 1) {
      setStatus("TEMPSTOP");
    } else {
      setStatus("ING");
    }
  };

  // 주문 상세 가져오기
  const getOrder = async (selectedOrder: string) => {
    const data = await OrderService.getOrder(selectedOrder);
    dispatch(orderSlice.actions.onChangeOrder(dummyOrder));
  };

  useEffect(() => {
    getShopStatus();
  }, []);

  useEffect(() => {
    if (selectedOrder > -1) {
      getOrder(list[selectedOrder].order_cd);
    }
  }, [selectedOrder]);
}
