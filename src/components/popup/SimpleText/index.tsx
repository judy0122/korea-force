import CommonPopup from "../CommonPopup";
import useSimpleText from "./useSimpleText";

export default function SimpleText() {
  const { title, onClickClose } = useSimpleText();
  return (
    <CommonPopup title={title} onClose={onClickClose}>
      <div className="con ">
        <p className="txt">주문이 거절되었습니다.</p>

        <div className="btn_area">
          <a href="#;" className="btn m default" onClick={onClickClose}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
