import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";
import { RejectMsgType } from "src/types/order";

export default function useRejectMsg() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<RejectMsgType>("매장사정 취소");
  const { rejectMsg: isShow } = useSelector((state: RootState) => state.popup);
  const { order } = useSelector((state: RootState) => state.order);

  // 주문 거절 사유 선택
  const onSelectMessage = (reason: RejectMsgType) => {
    setMessage(reason);
  };

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "rejectMsg",
        value: !isShow,
      })
    );
  };

  // 주문 거절
  const onRejectOrder = async () => {
    await OrderService.rejectOrder(order?.order_cd || "", message);
    onToggleIsShow();
  };

  return { isShow, message, onSelectMessage, onToggleIsShow, onRejectOrder };
}
