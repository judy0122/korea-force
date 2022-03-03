import orderSlice from "src/store/module/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";

export default function useBottom() {
  const dispatch = useDispatch();
  const { list, order } = useSelector((state: RootState) => state.order);
  const { subTabIndex } = useSelector((state: RootState) => state.tab);
  const { selectedOrder } = useSelector((state: RootState) => state.order);

  const onChangeSelectedOrder = (index: number) => {
    dispatch(orderSlice.actions.onChangeSelectedOrder(index));
  };

  return { order, list, subTabIndex, selectedOrder, onChangeSelectedOrder };
}
