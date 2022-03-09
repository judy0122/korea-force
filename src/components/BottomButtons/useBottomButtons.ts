import { useDispatch, useSelector } from "react-redux";
import { SettingService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";
import tabSlice from "src/store/module/tab/tabSlice";
import { OrderCallRider, OrderCallRiderCompany } from "src/types/api";

export default function useBottomButtons() {
  const dispatch = useDispatch();
  const { subTabIndex, isNext, deliveryType, tabIndex } = useSelector(
    (state: RootState) => state.tab
  );
  const { order } = useSelector((state: RootState) => state.order);
  const { user } = useSelector((state: RootState) => state.user);
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
  // 배달요청
  const onRequestDelivery = async () => {
    dispatch(tabSlice.actions.onChangeIsNext(true));
  };

  // 라이더 호출 클릭시
  const onClickDelivery = () => {
    deliveryType === "company" ? onCallRiderCompany() : onCallRider();
  };

  //라이더 호출
  const onCallRider = async () => {
    //TODO 라이더 시간/여부 넣기
    const params: OrderCallRider = {
      shop_cd: user?.shop_cd || "",
      order_cd: order.order_cd,
      reserve_minute: "0",
      reserve_yn: "0",
    };
    console.log(params);
    await SettingService.callRider(params);
  };

  //라이더호출(배달대행사지정)
  const onCallRiderCompany = async () => {
    //TODO 라이더 시간/여부/배달대행사 넣기
    const params: OrderCallRiderCompany = {
      shop_cd: user?.shop_cd || "",
      order_cd: order.order_cd,
      reserve_minute: "0",
      reserve_yn: "0",
      delivery_comp_cd: "",
    };
    console.log(params);
    await SettingService.callRiderCompany(params);
  };

  return {
    isNext,
    order,
    subTabIndex,
    isShowRejectMsg,
    isShowDeliveryTime,
    deliveryType,
    tabIndex,
    onToggleIsShowRejectMsg,
    onToggleIsShowDeliveryTime,
    onToggleIsShowRejectComplete,
    onRequestDelivery,
    onClickDelivery,
  };
}
