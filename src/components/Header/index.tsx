import Control from "./Control";
import useHeader from "./useHeader";

export default function Header() {
  const { isSetting, shopname, ismain, status, onClickSetting } = useHeader();
  return (
    <div className="header">
      <div className="left_info">
        {ismain && (
          <button
            className={isSetting ? "btn_set on" : "btn_set"}
            onClick={onClickSetting}
          >
            <img src={require("@src/assets/btn-setting.png")} alt="셋팅 버튼" />
          </button>
        )}
        <h1>
          <strong>코리아포스</strong>
          {ismain && <span>{shopname}</span>}
        </h1>
      </div>
      <Control isMain={ismain} status={status} />
    </div>
  );
}
