import { useSelector } from "react-redux";
import { useSimpleText } from "src/components/popup";
import useCollectPopup from "src/components/popup/Collect/useCollect";
import { OrderService } from "src/services";
import { RootState } from "src/store";

export default function useDeliveryRecipt() {
  const { order } = useSelector((state: RootState) => state.order);
  const { onClickOpen } = useSimpleText();
  const { onToggleIsShow } = useCollectPopup();

  const onComplete = () => {
    // TODO선결제 여부 어떻게 받을지..?
    if (order.pay_method !== "만나서카드결제(만나서결제)") {
      onClickOpen("주문완료", "주문을 완료 하시겠습니까?", async () => {
        await OrderService.completeOrder(order.order_cd);
      });
    } else {
      onToggleIsShow();
    }
  };

  return { onComplete };
}
