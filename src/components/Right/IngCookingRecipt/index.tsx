import Address from "../Address";
import { OrderType } from "src/types/order";

export interface IWaitingCookingReciptProps {
  order: OrderType;
}

export function IngCookingRecipt({ order }: IWaitingCookingReciptProps) {
  return (
    <div className="right_info">
      <div className="in_content">
        <strong className="top_txt">조리대기 0002</strong>

        <ul className="top_ico">
          <li>
            <span className="ico baemin1">배민1</span>
          </li>
        </ul>

        <div className="top_info">
          <table>
            <colgroup>
              <col style={{ width: "35%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              <tr>
                <td>후불(카드)결제</td>
                <td className="red txt_r">24,000원</td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <ul className="pt_20">
                    <li>
                      <span>주문일시</span>
                      1/1 (월) 14:20
                    </li>
                    <li>
                      <span>채널번호</span>
                      ABCD12341
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="bar" />

        <div className="btn_area pt_20 length2">
          <button className="btn s default">재인쇄</button>
          <button className="layer_request_modify openlayer btn s default">
            요청수정
          </button>
        </div>

        <div className="delivery_location">
          <ul className="lists">
            <li className="on">
              <span>
                배차
                <br />
                대기
              </span>
            </li>
            <li>
              <span>배차</span>
            </li>
            <li>
              <span>배달중</span>
            </li>
            <li>
              <span>
                배달
                <br />
                완료
              </span>
            </li>
          </ul>

          <p className="txt">
            <span className="blue">배차 대기중입니다.</span>
          </p>

          <p className="txt" style={{ display: "none" }}>
            픽업 예정시간 <span className="blue">13시 10분</span>
          </p>

          <p className="txt" style={{ display: "none" }}>
            <span className="blue">배달중입니다.</span>
          </p>

          <p className="txt" style={{ display: "none" }}>
            배달완료 시각<span className="blue">13시 40분</span>
          </p>
        </div>
        <hr className="bar" />

        <Address
          addrJibun={order?.order_addr_jibun}
          addrDoro={order?.order_addr_doro}
        />
        <hr className="bar" />
      </div>
    </div>
  );
}
