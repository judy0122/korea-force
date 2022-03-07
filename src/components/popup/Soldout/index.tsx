import { OrderMenusType } from "src/types/order";
import CommonPopup from "../CommonPopup";
import useSoldout from "./useSoldout";

export default function SoldoutPopup() {
  const {
    menus,
    selectedMenus,
    onToggleIsShow,
    onClickSoldout,
    onChangeMenus,
  } = useSoldout();

  return (
    <CommonPopup title="품절 처리" onClose={onToggleIsShow}>
      <div className="con">
        <p className="txt s pb_0">품절 처리 메뉴 선택</p>
        <em className="txt_gray m">(다음날 운영시간까지만 품절처리 됨)</em>

        <div className="pop_chk gray_box">
          <ul>
            {menus.map(({ menu_name, menu_cd }: OrderMenusType, index) => (
              <li key={index}>
                <div className="chk_list type3">
                  <input
                    type="checkbox"
                    name={menu_name}
                    id={menu_cd}
                    checked={selectedMenus.includes(menu_cd)}
                    onChange={onChangeMenus}
                  />
                  <label htmlFor={menu_cd}>{menu_name}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area l">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={onClickSoldout}>
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
