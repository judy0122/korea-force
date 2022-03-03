import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useBottomButtons() {
  const dispatch = useDispatch();
  const { subTabIndex } = useSelector((state: RootState) => state.tab);
  const { order } = useSelector((state: RootState) => state.order);
  const { rejectMsg: isShowRejectMsg, deliveryTime: isShowDeliveryTime } =
    useSelector((state: RootState) => state.popup);

  /**
   * 대기중
   */
  // 주문 거절 메시지 선택
  const onToggleIsShowRejectMsg = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "rejectMsg",
        value: !isShowRejectMsg,
      })
    );
  };

  // 배달시간 설정
  const onToggleIsShowDeliveryTime = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "deliveryTime",
        value: !isShowDeliveryTime,
      })
    );
  };

  // 주문거절완료
  const onToggleIsShowRejectComplete = () => {
    // dispatch(
    //   popupSlice.actions.onChangeIsShow({
    //     name: "simple",
    //     value: !isShowRejectComplete,
    //   })
    // );
  };

  /**
   * 처리중
   */
  // 주문취소
  const onCancelOrder = async () => {};

  return {
    order,
    subTabIndex,
    isShowRejectMsg,
    isShowDeliveryTime,
    onToggleIsShowRejectMsg,
    onToggleIsShowDeliveryTime,
    onToggleIsShowRejectComplete,
  };
}
