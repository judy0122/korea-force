import React from "react";

const Control = () => {
  return (
    <div className="right_controll">
      <div className="store_info">
        {/* <em className="ing" style="display:none;">
          영업중
        </em> */}
        <em className="stop">영업 임시중지 중</em>
        <span>06.28(금)</span>
        <strong>
          10<em>:</em>06
        </strong>
      </div>
      <div className="btn_box">
        <a href="#;" className="bell">
          <img src={require("@src/assets//btn_bell.png")} alt="알림" />
          <span className="round_red">N</span>
        </a>
        <a href="#;">
          <img src={require("@src/assets//btn_phone.png")} alt="phone" />
        </a>
        <a href="#;">
          <img src={require("@src/assets//btn_minus.png")} alt="minus" />
        </a>
        <a href="#;">
          <img src={require("@src/assets//btn_close.png")} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default Control;
