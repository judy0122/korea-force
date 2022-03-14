import PrintPopup from "src/components/popup/Print";
import Setting from "../Setting";
import useMain from "./useMain";
import { Header, Right, Left, Bottom } from "src/components";
import {
  AddDeliveryPopup,
  AlarmPopup,
  CancelReasonPopup,
  CookingTimePopup,
  DeliveryTimePopup,
  OriginPopup,
  PcListPopup,
  RejectMsgPopup,
  SimpleTextPopup,
  SoldoutPopup,
  CollectPopup,
} from "src/components/popup";

export default function Main() {
  const {
    isSetting,
    isShowCancel,
    isShowDeliveryTime,
    isShowRejectMsg,
    isShowSimpleText,
    isShowSoldout,
    isShowPrint,
    isShowCollect,
    isShowPcList,
    isShowCookingTime,
    isShowOrigin,
    isShowAlarm,
    isShowAddDelivery,
  } = useMain();

  return (
    <>
      <div className="korea_wrap">
        <Header />
        {isSetting ? (
          <Setting />
        ) : (
          <div className="order_info_cont">
            <Left />
            <Right />
            <Bottom />
            {/* <NewOrder /> */}
          </div>
        )}
      </div>

      {/* popup */}
      {isShowRejectMsg && <RejectMsgPopup />}
      {isShowSimpleText && <SimpleTextPopup />}
      {isShowDeliveryTime && <DeliveryTimePopup />}
      {isShowCookingTime && <CookingTimePopup />}
      {isShowCancel && <CancelReasonPopup />}
      {isShowSoldout && <SoldoutPopup />}
      {isShowPrint && <PrintPopup />}
      {isShowCollect && <CollectPopup />}
      {isShowPcList && <PcListPopup />}
      {isShowOrigin && <OriginPopup />}
      {isShowAlarm && <AlarmPopup />}
      {isShowAddDelivery && <AddDeliveryPopup />}
    </>
  );
}
