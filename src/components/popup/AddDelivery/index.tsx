import CommonPopup from "../CommonPopup";
import useAddDelivery from "./useAddDelivery";

export default function AddDeliveryPopup() {
  const { list, selected, onToggleIsShow, onChangeSelected, onClickAdd } =
    useAddDelivery();
  return (
    <CommonPopup title="배달대행사 추가" onClose={onToggleIsShow}>
      <div className="con">
        <div className="pop_chk gray_box">
          <ul>
            {list.map(({ delivery_comp_nm }, index) => (
              <li key={index}>
                <div className="chk_list type3">
                  <input
                    type="radio"
                    name="deliveryAdd"
                    id={`deliveryAdd-${delivery_comp_nm}`}
                    checked={selected === index}
                    onChange={() => onChangeSelected(index)}
                  />
                  <label htmlFor={`deliveryAdd-${delivery_comp_nm}`}>
                    {delivery_comp_nm}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area l">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={onClickAdd}>
            확인
          </a>

          <div className="arr_box">
            <a href="#;" className="arr_top">
              위로
            </a>
            <a href="#;" className="arr_bottom">
              아래
            </a>
          </div>
        </div>
      </div>
    </CommonPopup>
  );
}
