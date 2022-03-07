import dayjs from "dayjs";
import "dayjs/locale/ko";
import numeral from "numeral";
import { OrderType } from "src/types/order";
import Address from "../Address";
import { OrderMenu } from "../OrderMenu";
import { RequestMessage } from "../RequestMessage";
dayjs.locale("ko");

export interface ICompleteReciptProps {
  order: OrderType;
}

export default function CompleteRecipt({ order }: ICompleteReciptProps) {
  return (
    <div className="in_content">
      <strong className="top_txt">
        {order.order_status} {order.order_cd}
      </strong>

      <ul className="top_ico">
        <li>
          <span className="ico delivery">배달</span>
        </li>
        <li>
          <span className="ico style1">배민</span>
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
              <td>{order.pay_method}</td>
              <td className="red txt_r">
                {numeral(order.order_pay_amount).format("0,0")}원
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <ul className="pt_20">
                  <li>
                    <span>주문일시</span>
                    {dayjs(order.order_dtime).format("M/D (dd) HH:mm")}
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

      <div className="btn_area pt_20">
        <button className="btn s default w_100">결제 취소</button>
      </div>

      {/*  TODO 배달업체/비용/라이더 정보 넣기 */}
      <div className="delivery_location">
        <div className="top_info">
          <table>
            <colgroup>
              <col style={{ width: "35%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={3}>
                  <ul>
                    <li>
                      <span>배달업체</span>
                      바로고
                    </li>
                    <li>
                      <span>비용</span>
                      3,300원 (할증 500원)
                    </li>
                    <li>
                      <span>라이더</span>
                      미정
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="bar" />
      {/* 주소 */}
      <Address
        addrJibun={order?.order_addr_jibun}
        addrDoro={order?.order_addr_doro}
      />

      <hr className="bar" />

      <dl className="tit_con_style">
        <dt>고객연락처</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "25%" }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={2}>
                  {order.order_safetel === "1"
                    ? order.order_safe_telno
                    : order?.order_tel}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="gray pb_10">
                  고객 안심번호는 3시간동안만 유효합니다
                </td>
              </tr>
              <tr>
                <td>주문번호</td>
                <td>{order.order_cd}</td>
              </tr>
              <tr>
                <td>주문시간</td>
                <td>{dayjs(order.order_dtime).format("M/D (dd) HH:mm")}</td>
              </tr>
              <tr>
                <td>가게정보</td>
                <td>{order.shop_name}</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>

      <hr className="bar" />

      {/* 요청사항 */}
      <RequestMessage
        requestMessage={order?.order_reqmsg}
        deliveryMessage={order?.order_delivmsg}
        additionalMessage={order.additional_msg}
      />

      <hr className="bar" />
      {/* 주문 메뉴 */}
      <OrderMenu order={order} />
    </div>
  );
}
