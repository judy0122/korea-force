import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";
import orderSlice from "src/store/module/order/orderSlice";

export default function useBottom() {
  const dispatch = useDispatch();
  const { list, order, selectedOrder } = useSelector(
    (state: RootState) => state.order
  );
  const { subTabIndex } = useSelector((state: RootState) => state.tab);
  const { print } = useSelector((state: RootState) => state.popup);

  const onChangeSelectedOrder = (index: number) => {
    dispatch(orderSlice.actions.onChangeSelectedOrder(index));
  };

  // 프린트 버튼 클릭시
  const onClickPrint = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "print",
        value: !print,
      })
    );
  };

  return {
    order,
    list,
    subTabIndex,
    selectedOrder,
    onChangeSelectedOrder,
    onClickPrint,
  };
}
