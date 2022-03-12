import CommonPopup from "../CommonPopup";
import { cookingTimes } from "../values";
import useCookingTime from "./useCookingTime";

export default function CookingTime() {
  const { time, onToggleIsShow, onSelectTime, onChangeCookingTime } =
    useCookingTime();
  return (
    <CommonPopup title="조리 시간 설정" onClose={onToggleIsShow}>
      <>
        <div className="con">
          <p className="txt s">조리 시간을 설정해 주세요.</p>

          <div className="choice_list length3">
            <ul className=" ">
              {cookingTimes.map((item: any, index) => (
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
            <a
              href="#;"
              className="btn m default close"
              onClick={onToggleIsShow}
            >
              취소
            </a>
            <a href="#;" className="btn m gray" onClick={onChangeCookingTime}>
              확인
            </a>
          </div>
        </div>

        <button className="close" onClick={onToggleIsShow}>
          닫기
        </button>
      </>
    </CommonPopup>
  );
}
