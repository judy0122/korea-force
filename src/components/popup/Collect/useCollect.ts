import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useCollect() {
  const dispatch = useDispatch();
  const { collect: isShow } = useSelector((state: RootState) => state.popup);
  const { order } = useSelector((state: RootState) => state.order);
  const [method, setMethod] = useState<string>("cash");

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "collect",
        value: !isShow,
      })
    );
  };

  // 결제방법 변경
  const onChangeMethod = (e: any) => {
    setMethod(e.target.id);
  };

  // 완료버튼 클릭
  const onClickConfirm = async () => {
    await OrderService.completeOrder(order.order_cd);
    onToggleIsShow();
    // TODO 배달 상태 변경
  };

  return {
    method,
    amount: order?.order_pay_amount,
    isShow,
    onToggleIsShow,
    onChangeMethod,
    onClickConfirm,
  };
}
