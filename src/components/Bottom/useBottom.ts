import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import orderSlice from "src/store/module/order/orderSlice";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useBottom() {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.list);
  const { selectedOrder } = useSelector((state: RootState) => state.order);
  const {
    rejectMsg: isShowRejectMsg,
    deliveryTime: isShowDeliveryTime,
    rejectComplete: isShowRejectComplete,
  } = useSelector((state: RootState) => state.popup);

  const onChangeSelectedOrder = (index: number) => {
    dispatch(orderSlice.actions.onChangeSelectedOrder(index));
  };

  const onToggleIsShowRejectMsg = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "rejectMsg",
        value: !isShowRejectMsg,
      })
    );
  };

  const onToggleIsShowDeliveryTime = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "deliveryTime",
        value: !isShowDeliveryTime,
      })
    );
  };

  const onToggleIsShowRejectComplete = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "deliveryTime",
        value: !isShowRejectComplete,
      })
    );
  };

  return {
    list,
    selectedOrder,
    isShowRejectMsg,
    isShowDeliveryTime,
    isShowRejectComplete,
    onChangeSelectedOrder,
    onToggleIsShowRejectMsg,
    onToggleIsShowDeliveryTime,
    onToggleIsShowRejectComplete,
  };
}
