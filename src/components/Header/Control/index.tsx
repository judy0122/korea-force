import useHeader from "../useHeader";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { statusTitle } from "../values";
dayjs.locale("ko");

export default function Control() {
  const { ismain, status } = useHeader();

  return (
    <div className="right_controll">
      {ismain && (
        <>
          <div className="store_info">
            <em className={status?.toLowerCase()}>{statusTitle[status]}</em>
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
