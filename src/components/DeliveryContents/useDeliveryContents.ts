import { RootState } from "src/store";
import { useDispatch, useSelector } from "react-redux";
import orderSlice from "src/store/module/order/orderSlice";
import { OrderService } from "src/services";
import { useEffect } from "react";

export default function useDeliveryContents() {
  const { list } = useSelector((state: RootState) => state.order);
  const { selectedOrder } = useSelector((state: RootState) => state.order);

  const dispatch = useDispatch();

  // 주문목록 클릭시
  const onChangeSelectedOrder = (orderIndex: number) => {
    dispatch(orderSlice.actions.onChangeSelectedOrder(orderIndex));
  };

  // 주문 상세 가져오기
  const getOrder = async () => {
    const orderCd: string = list[selectedOrder]?.order_cd;
    const data = await OrderService.getOrder(orderCd);
    dispatch(orderSlice.actions.onChangeOrder(data));
  };

  useEffect(() => {
    if (selectedOrder > -1) {
      getOrder();
    }
  }, [selectedOrder]);

  return {
    list,
    selectedOrder,
    onChangeSelectedOrder,
  };
}
