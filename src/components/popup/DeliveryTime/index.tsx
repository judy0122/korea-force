import { deliveryTimes } from "src/components/popup/values";
import CommonPopup from "../CommonPopup";
import useDeliveryTime from "./useDeliveryTime";

export default function DeliveryTimePopup() {
  const { time, onSelectTime, onAcceptOrder, onToggleIsShow } =
    useDeliveryTime();

  return (
    <CommonPopup title="배달 시간 설정" onClose={onToggleIsShow}>
      <div className="con">
        <p className="txt s">배달 시간 설정해 주세요.</p>

        <div className="choice_list length3">
          <ul>
            {deliveryTimes.map((item: any, index) => (
              <li
                key={index}
                onClick={() => onSelectTime(item)}
                className={time === item ? "on" : ""}
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
          <a href="#;" className="btn m gray" onClick={onAcceptOrder}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
