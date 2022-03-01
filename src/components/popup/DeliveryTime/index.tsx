import {
  useDeliveryTime,
  useSelectDeliveryTime,
} from "src/components/Bottom/Provider";
import { deliveryTimes } from "src/components/Bottom/values";
import { useAcceptOrder } from "src/pages/Main/Provider";
import CommonPopup from "../CommonPopup";

export interface IDeliveryTimePopupProps {
  onClose: () => void;
}

export default function DeliveryTimePopup({
  onClose,
}: IDeliveryTimePopupProps) {
  const onAcceptOrder = useAcceptOrder();
  const deliveryTime = useDeliveryTime();
  const onSelectDeliveryTime = useSelectDeliveryTime();

  const handleConfirm = async () => {
    await onAcceptOrder(deliveryTime);
    onClose();
  };

  return (
    <CommonPopup title="배달 시간 설정" onClose={onClose}>
      <div className="con">
        <p className="txt s">배달 시간 설정해 주세요.</p>

        <div className="choice_list length3">
          <ul>
            {deliveryTimes.map((time: any, index) => (
              <li
                key={index}
                onClick={() => onSelectDeliveryTime(time)}
                className={deliveryTime === time ? "on" : ""}
              >
                {time}
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
