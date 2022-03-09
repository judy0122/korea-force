import { Header, Right, Left, Bottom } from "src/components";
import {
  CancelReasonPopup,
  DeliveryTimePopup,
  RejectMsgPopup,
  SimpleText,
  SoldoutPopup,
  useCancelPopup,
  useDeliveryTime,
  useRejectMsg,
  useSimpleText,
  useSoldout,
} from "src/components/popup";
import { CollectPopup } from "src/components/popup/Collect";
import useCollect from "src/components/popup/Collect/useCollect";
import PrintPopup from "src/components/popup/Print";
import usePrint from "src/components/popup/Print/usePrint";

export default function Main() {
  const { isShow: isShowCancel } = useCancelPopup();
  const { isShow: isShowDeliveryTime } = useDeliveryTime();
  const { isShow: isShowRejectMsg } = useRejectMsg();
  const { isShow: isShowSimpleText } = useSimpleText();
  const { isShow: isShowSoldout } = useSoldout();
  const { isShow: isShowPrint } = usePrint();
  const { isShow: isShowCollect } = useCollect();

  return (
    <>
      <Header />
      <div className="order_info_cont">
        <Left />
        <Right />
        <Bottom />
        {/* <NewOrder /> */}
      </div>

      {/* popup */}
      {isShowRejectMsg && <RejectMsgPopup />}
      {isShowSimpleText && <SimpleText />}
      {isShowDeliveryTime && <DeliveryTimePopup />}
      {isShowCancel && <CancelReasonPopup />}
      {isShowSoldout && <SoldoutPopup />}
      {isShowPrint && <PrintPopup />}
      {isShowCollect && <CollectPopup />}
    </>
  );
}
