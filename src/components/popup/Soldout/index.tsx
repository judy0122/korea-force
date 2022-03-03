import CommonPopup from "../CommonPopup";
import useSoldout from "./useSoldout";

export default function SoldoutPopup() {
  const { onToggleIsShow } = useSoldout();

  return (
    <CommonPopup title="품절 처리" onClose={onToggleIsShow}>
      <div className="con">
        <p className="txt s pb_0">품절 처리 메뉴 선택</p>
        <em className="txt_gray m">(다음날 운영시간까지만 품절처리 됨)</em>

        <div className="pop_chk gray_box">
          <ul>
            <li>
              <div className="chk_list type3">
                <input type="checkbox" name="soldout_chk" id="soldout_chk1" />
                <label htmlFor="soldout_chk1">순살 소금구이</label>
              </div>
            </li>
          </ul>
        </div>

        <div className="btn_area l">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray">
            품절처리
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
