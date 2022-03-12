import {
  DeliverySetting,
  OperationSetting,
  PrintSetting,
} from "src/components";
import useSetting from "./useSetting";
import { settingTabs } from "./values";

export default function Setting() {
  const { tabIndex, name, onChangeTabIndex, onClickLogout, onClose } =
    useSetting();

  return (
    <div className="setting_layer">
      <div className="top_controll">
        <div className="tab tab_type1">
          <ul>
            {settingTabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => onChangeTabIndex(index)}
                className={
                  tabIndex === index ? "btn m blue" : "btn m lightgray"
                }
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="right_controll">
          <strong>{name} 사장님</strong>
          <button className="btn m default" onClick={onClickLogout}>
            로그아웃
          </button>
          <button className="btn m default close" onClick={onClose}>
            <span>닫기</span>
          </button>
        </div>
      </div>

      <div className="sett_cont">
        <div className="on">
          {tabIndex === 0 && <OperationSetting />}
          {tabIndex === 1 && <DeliverySetting />}
          {tabIndex === 2 && <PrintSetting />}
        </div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
}
