import CommonPopup from "../CommonPopup";
import useOrigin from "./useOrigin";

export default function OriginPopup() {
  const { value, onToggleIsShow, onChangeValue, onClickSave } = useOrigin();
  return (
    <CommonPopup title="원산지 출력 내용" onClose={onToggleIsShow}>
      <div className="con">
        <ul className="list dot l">
          <li>배달과 포장 시 영수증에 원산지를 표시해야 합니다.</li>
          <li>
            메뉴별 원산지 출력은 각 메뉴 정보에 원산지 정보 입력이 필요합니다.
          </li>
        </ul>

        <div className="gray_round_box mt_25">
          <textarea
            name="origin"
            id="origin"
            value={value}
            onChange={onChangeValue}
          ></textarea>
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={onClickSave}>
            저장
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
