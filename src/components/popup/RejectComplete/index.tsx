import CommonPopup from "../CommonPopup";

export interface IRejectCompletePopupProps {
  onClose: () => void;
}

export default function RejectCompletePopup({
  onClose,
}: IRejectCompletePopupProps) {
  return (
    <CommonPopup title="주문거절 처리 완료" onClose={onClose}>
      <div className="con ">
        <p className="txt">주문이 거절되었습니다.</p>

        <div className="btn_area">
          <a href="#;" className="btn m default" onClick={onClose}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
