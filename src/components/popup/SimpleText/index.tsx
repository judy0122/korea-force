import CommonPopup from "../CommonPopup";
import useSimpleText from "./useSimpleText";

export default function SimpleTextPopup() {
  const { title, contents, hasCancel, onClickClose } = useSimpleText();
  return (
    <CommonPopup title={title} onClose={onClickClose}>
      <div className="con ">
        <p className="txt">{contents}</p>

        <div className="btn_area">
          {hasCancel && (
            <a href="#;" className="btn m default close" onClick={onClickClose}>
              취소
            </a>
          )}
          <a href="#;" className="btn m default" onClick={onClickClose}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
