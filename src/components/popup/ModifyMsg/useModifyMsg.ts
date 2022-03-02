import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import orderSlice from "src/store/module/order/orderSlice";
import popupSlice from "src/store/module/popup/popupSlice";
import { OrderType } from "src/types/order";

export default function useModifyMsg() {
  const { modifyMsg: isShow } = useSelector((state: RootState) => state.popup);
  const { order }: { order: OrderType | null } = useSelector(
    (state: RootState) => state.order
  );
  const dispatch = useDispatch();

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "modifyMsg",
        value: !isShow,
      })
    );
  };

  // 요청사항 수정하기
  const onModifyMsg = (value: string) => {
    const newOrder: any = { ...(order || {}), additional_msg: value };
    dispatch(orderSlice.actions.onChangeOrder(newOrder));
  };

  return { isShow, onToggleIsShow, onModifyMsg };
}
