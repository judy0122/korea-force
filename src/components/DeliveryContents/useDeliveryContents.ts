import { RootState } from "src/store";
import { useDispatch, useSelector } from "react-redux";
import orderSlice from "src/store/module/order/orderSlice";
import { OrderService } from "src/services";
import listSlice from "src/store/module/list/listSlice";
import { dummyData, dummyOrder } from "src/pages/Main/values";
import { ListType } from "src/types/api";
import { useEffect } from "react";

export default function useDeliveryContents() {
  const { list, pageIndex } = useSelector((state: RootState) => state.list);
  const { selectedOrder } = useSelector((state: RootState) => state.order);

  const dispatch = useDispatch();

  // TODO:주문대기 목록 가져오기
  const getDeliveryList = async (type: ListType, isinit?: boolean) => {
    const data = await OrderService.getWaitingList(0, pageIndex);
    dispatch(listSlice.actions.onChangeList(dummyData));
    if (isinit) {
      dispatch(orderSlice.actions.onChangeSelectedOrder(0));
    }
  };

  // 주문목록 클릭시
  const onChangeSelectedOrder = (orderIndex: number) => {
    dispatch(orderSlice.actions.onChangeSelectedOrder(orderIndex));
  };

  useEffect(() => {
    getDeliveryList("standby", true);
  }, []);

  // 주문 상세 가져오기
  const getOrder = async () => {
    const orderCd: string = list[selectedOrder]?.order_cd;
    const data = await OrderService.getOrder(orderCd);
    dispatch(orderSlice.actions.onChangeOrder(dummyOrder));
  };

  useEffect(() => {
    getOrder();
  }, [selectedOrder]);

  return {
    list,
    selectedOrder,
    onChangeSelectedOrder,
  };
}
