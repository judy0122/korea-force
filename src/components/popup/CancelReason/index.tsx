import CommonPopup from "../CommonPopup";
import useSimpleText from "../SimpleText/useSimpleText";
import useSoldout from "../Soldout/useSoldout";
import useCancelPopup from "./useCancelPopup";
import { cancelReasons } from "../values";

export default function CancelReasonPopup() {
  const { reason, onSelectReason, onToggleIsShow, onClickCancel } =
    useCancelPopup();
  const { onClickOpen } = useSimpleText();
  const { onToggleIsShow: onToggleIsShowSoldout } = useSoldout();

  const handleCancel = async () => {
    if (reason !== "재료소진") {
      await onClickCancel();
      onClickOpen("주문취소 처리 완료", "주문이 취소되었습니다.");
    } else {
      onToggleIsShow();
      onToggleIsShowSoldout();
    }
  };

  return (
    <CommonPopup title="접수 후 취소" onClose={onToggleIsShow}>
      <div className="con">
        <p className="txt s">주문취소 사유를 선택해주세요.</p>

        <div className="choice_list center">
          <ul>
            {cancelReasons.map((item, index) => (
              <li
                key={index}
                className={reason === item ? "on" : ""}
                onClick={() => onSelectReason(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={handleCancel}>
            주문취소
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
