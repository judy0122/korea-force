import useCancelPopup from "../popup/CancelReason/useCancelPopup";
import useBottomButtons from "./useBottomButtons";

export interface IBottomButtonsProps {}

export default function BottomButtons(props: IBottomButtonsProps) {
  const {
    order,
    subTabIndex,
    onToggleIsShowRejectMsg,
    onToggleIsShowDeliveryTime,
  } = useBottomButtons();
  const { onToggleIsShow } = useCancelPopup();

  switch (subTabIndex) {
    case 0:
      return (
        <>
          <button
            disabled={!order}
            className="layer_order_refusal openlayer btn ms default line2"
            onClick={onToggleIsShowRejectMsg}
          >
            주문
            <br />
            거절
          </button>
          <button
            disabled={!order}
            className="btn ms blue"
            style={{ width: 126 }}
            onClick={onToggleIsShowDeliveryTime}
          >
            주문접수
          </button>
        </>
      );

    case 1:
      return (
        <>
          <button
            // disabled={!order}
            className="btn ms default line2"
            onClick={onToggleIsShow}
          >
            주문
            <br />
            취소
          </button>
          <button disabled={!order} className="btn ms default line2">
            주문
            <br />
            수정
          </button>
          <button
            disabled={!order}
            className="btn ms blue"
            style={{ width: 116 }}
          >
            배달요청
          </button>
        </>
      );

    default:
      return <div>ad</div>;
  }
}
