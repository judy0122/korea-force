import { useSelector } from "react-redux";
import { RootState } from "src/store";

export default function useMain() {
  const { isSetting } = useSelector((state: RootState) => state.setting);
  const {
    cancelReason: isShowCancel,
    deliveryTime: isShowDeliveryTime,
    cookingTime: isShowCookingTime,
    rejectMsg: isShowRejectMsg,
    simple,
    soldout: isShowSoldout,
    print: isShowPrint,
    collect: isShowCollect,
    pcList: isShowPcList,
    origin: isShowOrigin,
    alarm: isShowAlarm,
  } = useSelector((state: RootState) => state.popup);

  return {
    isSetting,
    isShowCancel,
    isShowDeliveryTime,
    isShowRejectMsg,
    isShowSimpleText: simple.isShow,
    isShowSoldout,
    isShowPrint,
    isShowCollect,
    isShowPcList,
    isShowCookingTime,
    isShowOrigin,
    isShowAlarm,
  };
}
