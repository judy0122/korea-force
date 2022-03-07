import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import tabSlice from "src/store/module/tab/tabSlice";

export default function useIngRecipt() {
  const dispatch = useDispatch();
  const { order } = useSelector((state: RootState) => state.order);

  const onClickComplete = async () => {
    const check = window.confirm("주문을 완료하시겠습니까?");
    if (check) {
      await OrderService.completeOrder(order.order_cd);
      dispatch(tabSlice.actions.onChangeSubTabIndex(3));
    }
  };

  return { onClickComplete };
}
