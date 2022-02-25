import * as React from "react";
import Control from "../Control";
import { useIsmain, useShopname } from "../Provider";

export interface IWrapperProps {}

export function Wrapper(props: IWrapperProps) {
  const shopname = useShopname();
  const ismain = useIsmain();

  return (
    <div className="korea_wrap">
      <div className="header">
        <div className="left_info">
          {ismain && (
            <button className="btn_set">
              <img
                src={require("@src/assets/btn-setting.png")}
                alt="셋팅 버튼"
              />
            </button>
          )}
          <h1>
            <strong>코리아포스</strong>
            {ismain && <span>{shopname}</span>}
          </h1>
        </div>
        <Control />
      </div>
    </div>
  );
}
