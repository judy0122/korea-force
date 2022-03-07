import numeral from "numeral";
import { useDeliveryTime } from "src/components/popup";
import { OrderType } from "src/types/order";

export interface IRiderReciptProps {
  order: OrderType;
}

export function RiderRecipt({ order }: IRiderReciptProps) {
  const { deliverys } = useDeliveryTime();

  return (
    <div className="in_content">
      <strong className="top_txt">배송요청</strong>

      <ul className="top_ico">
        <li>
          <span className="ico style1">배민</span>
        </li>
      </ul>

      <div className="top_info">
        <table>
          <colgroup>
            <col style={{ width: "35%" }} />
            <col style={{ width: "auto" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>결제 할 금액</th>
              <td>{order.pay_method}</td>
              <td className="red txt_r">
                {numeral(order.order_pay_amount).format("0,0")}원
              </td>
            </tr>
            <tr className="top_border">
              <th colSpan={3}>배달주소</th>
            </tr>
            <tr>
              <td colSpan={3}>
                <ul>
                  <li>
                    [지번] {order.order_addr_jibun} {order.order_addr_detail}
                  </li>
                  <li>
                    [도로명] {order.order_addr_doro} {order.order_addr_detail}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="bar" />

      <div className="delivery_type">
        <div className="btn_area txt_l tab_type3">
          <button className="btn s gray">배달대행사</button>
          <button className="btn s default">자체배달</button>
        </div>

        <ul className="choice default_tab">
          <li className="on">
            <strong>바로고</strong>
            <span className="red">20분</span>
            <span>55,000원</span>
          </li>
          <li>
            <strong>제트콜</strong>
            <span className="red">20분</span>
            <span>55,000원</span>
          </li>
          <li>
            <strong>부릉</strong>
            <span className="green">즉시</span>
            <span>55,000원</span>
          </li>
        </ul>
      </div>

      <hr className="bar" />

      <div className="delivery_info">
        <table>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>배달비</th>
              <td className="txt_r">
                <strong className="red">3,500원</strong>
                <span className="gray">기본 3,000원 + 할증 500</span>
              </td>
            </tr>
            <tr>
              <th>배달 예치금</th>
              <td className="txt_r">1,205,000원</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="bar" />

      <dl className="tit_con_style">
        <dt>라이더 호출 시간</dt>
        <dd>
          <div className="choice_list length3">
            <ul className=" ">
              <li className="on">즉시</li>
              <li>15분</li>
              <li>20분</li>
              <li>30분</li>
              <li>40분</li>
              <li>50분</li>
            </ul>
            <input
              type="text"
              name=""
              id=""
              className="input"
              placeholder="직접입력 가능"
            />
          </div>
        </dd>
      </dl>
    </div>
  );
}
