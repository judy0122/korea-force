import { rejectMsgs } from "src/components/Bottom/values";
import CommonPopup from "../CommonPopup";
import useRejectMsg from "./useRejectMsg";

export interface IRejectMsgPopupProps {
  onClose: () => void;
}

export default function RejectMsgPopup({ onClose }: IRejectMsgPopupProps) {
  const { message, onSelectMessage, onToggleIsShow, onRejectOrder } =
    useRejectMsg();

  const handleRejectOrder = async () => {
    await onRejectOrder(message);
    onToggleIsShow();
    onClose();
  };

  return (
    <CommonPopup size="m" title="주문거절" onClose={onClose}>
      <div className="con">
        <p className="txt s">주문거절 사유를 선택해 주세요..</p>

        <div className="choice_list length2">
          <ul>
            {rejectMsgs.map((msg: any, index: number) => (
              <li
                key={index}
                onClick={() => onSelectMessage(msg)}
                className={msg === message ? "on" : ""}
              >
                {msg}
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onClose}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={handleRejectOrder}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
