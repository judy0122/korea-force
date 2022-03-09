import CommonPopup from "../CommonPopup";
import { prints } from "../values";
import usePrint from "./usePrint";

export default function PrintPopup() {
  const { select, onToggleIsShow, onChangeSelect, onClickPrint } = usePrint();
  return (
    <CommonPopup title="영수증 재출력" onClose={onToggleIsShow}>
      <div className="con">
        <div className="choice_list center">
          <ul>
            {prints.map((print, index) => (
              <li
                key={index}
                className={select === print ? "on" : ""}
                onClick={() => onChangeSelect(print)}
              >
                {print}
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={onClickPrint}>
            출력
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
