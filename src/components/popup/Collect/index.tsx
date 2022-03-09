import numeral from "numeral";
import CommonPopup from "../CommonPopup";
import { paymentMethods } from "../values";
import useCollect from "./useCollect";

export function CollectPopup() {
  const { amount, method, onToggleIsShow, onChangeMethod, onClickConfirm } =
    useCollect();
  return (
    <CommonPopup title="수금확인" onClose={onToggleIsShow}>
      <div className="con">
        <div className="payment">
          <ul>
            <li>
              <span>결제할 금액</span>
              <strong>{numeral(amount).format("0,0")}원</strong>
            </li>
          </ul>
        </div>

        <div className="pop_chk">
          <ul className="length2">
            {paymentMethods.map(({ name, value }, index) => (
              <li key={index}>
                <div className="chk_list type3">
                  <input
                    type="radio"
                    name="collect_chk"
                    id={value}
                    onChange={onChangeMethod}
                    checked={method === value}
                  />
                  <label htmlFor={value}>{name}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={onClickConfirm}>
            확인
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
