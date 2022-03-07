import CommonPopup from "../CommonPopup";
import useSimpleText from "./useSimpleText";

export default function SimpleText() {
  const { title, contents, onClickClose } = useSimpleText();
  return (
    <CommonPopup title={title} onClose={onClickClose}>
      <div className="con ">
        <p className="txt">{contents}</p>

        <div className="btn_area">
          <a href="#;" className="btn m default" onClick={onClickClose}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
