import { useIsmain } from "../Provider";
import dayjs from "dayjs";
import "dayjs/locale/ko";

export default function Control() {
  const ismain = useIsmain();
  dayjs.locale("ko");

  return (
    <div className="right_controll">
      {ismain && (
        <>
          <div className="store_info">
            {/* <em className="ing" style="display:none;">
          영업중
        </em> */}
            <em className="stop">영업 임시중지 중</em>
            <span>{dayjs().format("MM.DD(dd)")}</span>
            <strong>
              {dayjs().format("HH")}
              <em>:</em>
              {dayjs().format("MM")}
            </strong>
          </div>
        </>
      )}
      <div className="btn_box">
        {ismain && (
          <>
            <a href="#;" className="bell">
              <img src={require("@src/assets//btn_bell.png")} alt="알림" />
              <span className="round_red">N</span>
            </a>
            <a href="#;">
              <img src={require("@src/assets//btn_phone.png")} alt="phone" />
            </a>
          </>
        )}
        <a href="#;">
          <img src={require("@src/assets//btn_minus.png")} alt="minus" />
        </a>
        <a href="#;">
          <img src={require("@src/assets//btn_close.png")} alt="close" />
        </a>
      </div>
    </div>
  );
}
