import { DeliveryTimePopup, RejectMsgPopup } from "../popup";
import RejectCompletePopup from "../popup/RejectComplete";
import useBottom from "./useBottom";

export default function Bottom() {
  const {
    list,
    selectedOrder,
    onChangeSelectedOrder,
    isShowRejectMsg,
    isShowRejectComplete,
    isShowDeliveryTime,
    onToggleIsShowRejectMsg,
    onToggleIsShowDeliveryTime,
    onToggleIsShowRejectComplete,
  } = useBottom();

  return (
    <>
      <div className="bottom_controll">
        <div className="left">
          <div className="page btn">
            <p>
              <strong>{selectedOrder + 1}</strong>/<span>{list.length}</span>
            </p>
          </div>
          <div className="arr_controll">
            <button
              disabled={selectedOrder === 0}
              className="btn ms default"
              onClick={() => onChangeSelectedOrder(selectedOrder - 1)}
            >
              <span className="arr_top">위로</span>
            </button>
            <button
              className="btn ms default"
              disabled={selectedOrder === list.length - 1}
              onClick={() => onChangeSelectedOrder(selectedOrder + 1)}
            >
              <span className="arr_bottom">아래로</span>
            </button>
          </div>
        </div>

        <div className="right">
          <button
            className="layer_order_refusal openlayer btn ms default line2"
            onClick={onToggleIsShowRejectMsg}
          >
            주문
            <br />
            거절
          </button>
          <button
            className="btn ms blue"
            style={{ width: 126 }}
            onClick={onToggleIsShowDeliveryTime}
          >
            주문접수
          </button>
          <div className="arr_controll">
            <button className="btn ms default">
              <span className="print">프린트</span>
            </button>
            <button className="btn ms default">
              <span className="arr_top">위로</span>
            </button>
            <button className="btn ms default">
              <span className="arr_bottom">아래로</span>
            </button>
          </div>
        </div>
      </div>
      {isShowRejectMsg && <RejectMsgPopup onClose={onToggleIsShowRejectMsg} />}
      {isShowRejectComplete && (
        <RejectCompletePopup onClose={onToggleIsShowRejectComplete} />
      )}
      {isShowDeliveryTime && (
        <DeliveryTimePopup onClose={onToggleIsShowDeliveryTime} />
      )}
    </>
  );
}
