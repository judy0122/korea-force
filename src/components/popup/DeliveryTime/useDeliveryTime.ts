import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import orderSlice from "src/store/module/order/orderSlice";
import popupSlice from "src/store/module/popup/popupSlice";
import { DeliveryTimeType } from "src/types/order";

export default function useDeliveryTime() {
  const dispatch = useDispatch();
  const [time, setTime] = useState<DeliveryTimeType>("즉시");
  const { order, pageIndex } = useSelector((state: RootState) => state.order);
  const { deliveryTime: isShow } = useSelector(
    (state: RootState) => state.popup
  );

  // 배달 시간 선택
  const onSelectTime = (time: DeliveryTimeType) => {
    setTime(time);
  };

  // 목록 조회
  const getList = async () => {
    const data = await OrderService.getList(0, pageIndex, "standby");
    dispatch(orderSlice.actions.onChangeList(data || []));
    dispatch(orderSlice.actions.onChangeSelectedOrder(0));
  };

  // 주문 접수
  const onAcceptOrder = async () => {
    await OrderService.acceptOrder(order?.order_cd || "", time);
    getList();
    onToggleIsShow();
  };

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "rejectMsg",
        value: !isShow,
      })
    );
  };

  return { isShow, time, onSelectTime, onAcceptOrder, onToggleIsShow };
}
