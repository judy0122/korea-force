import { deliveryTimes } from "src/components/Bottom/values";
import CommonPopup from "../CommonPopup";
import useDeliveryTime from "./useDeliveryTime";

export interface IDeliveryTimePopupProps {
  onClose: () => void;
}

export default function DeliveryTimePopup({
  onClose,
}: IDeliveryTimePopupProps) {
  const { time, onSelectTime, onAcceptOrder } = useDeliveryTime();

  const handleConfirm = async () => {
    await onAcceptOrder(time);
    onClose();
  };

  return (
    <CommonPopup title="배달 시간 설정" onClose={onClose}>
      <div className="con">
        <p className="txt s">배달 시간 설정해 주세요.</p>

        <div className="choice_list length3">
          <ul>
            {deliveryTimes.map((item: any, index) => (
              <li
                key={index}
                onClick={() => onSelectTime(time)}
                className={time === item ? "on" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onClose}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={handleConfirm}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
