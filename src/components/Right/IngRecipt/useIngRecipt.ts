import { useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";

export default function useIngRecipt() {
  const { order } = useSelector((state: RootState) => state.order);

  const onClickComplete = async () => {
    const check = window.confirm("주문을 완료하시겠습니까?");
    if (check) {
      // OrderService.completeOrder(order.order_cd);
    }
  };

  return { onClickComplete };
}
