import React from "react";
import Control from "./Control";

const Header = () => {
  return (
    <div className="korea_wrap">
      <div className="header">
        <div className="left_info">
          <button className="btn_set">
            <img src={require("@src/assets/btn-setting.png")} alt="셋팅 버튼" />
          </button>
          <h1>
            <strong>코리아포스</strong>
            <span>배슐랭 일산지점</span>
          </h1>
        </div>
        <Control />
      </div>
    </div>
  );
};

export default Header;
