import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useCancelPopup() {
  const dispatch = useDispatch();
  const [reason, setReason] = useState<string>("고객요청");
  const { cancelReason: isShow } = useSelector(
    (state: RootState) => state.popup
  );
  const { order } = useSelector((state: RootState) => state.order);

  const onSelectReason = (reason: string) => {
    setReason(reason);
  };

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "cancelReason",
        value: !isShow,
      })
    );
  };

  const onClickCancel = async () => {
    // await OrderService.cancelOrder(order.order_cd, reason);
    onToggleIsShow();
  };

  return { reason, isShow, onSelectReason, onToggleIsShow, onClickCancel };
}
