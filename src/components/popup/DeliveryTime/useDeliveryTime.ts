import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import orderSlice from "src/store/module/order/orderSlice";
import popupSlice from "src/store/module/popup/popupSlice";
import tabSlice from "src/store/module/tab/tabSlice";
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

  const getIngList = async () => {
    const data = await OrderService.getList(0, pageIndex, "ing");
    dispatch(tabSlice.actions.onChangeSubTabIndex(1));
    dispatch(orderSlice.actions.onChangeList(data || []));
    dispatch(orderSlice.actions.onChangeSelectedOrder(0));
  };

  // 주문 접수
  const onAcceptOrder = async () => {
    await OrderService.acceptOrder(order?.order_cd || "", time);
    getIngList();
    onToggleIsShow();
  };

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "deliveryTime",
        value: !isShow,
      })
    );
  };

  return { isShow, time, onSelectTime, onAcceptOrder, onToggleIsShow };
}
