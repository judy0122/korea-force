import numeral from "numeral";
import { OrderType } from "src/types/order";
import { OrderMenu } from "../OrderMenu";
import { RequestMessage } from "../RequestMessage";
import useIngRecipt from "./useIngRecipt";

export interface IWaitingReciptProps {
  order: OrderType;
}

export function IngRecipt({ order }: IWaitingReciptProps) {
  const { onClickComplete } = useIngRecipt();
  return (
    <>
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

        <p className="order_txt">
          메뉴 {order.order_menus.length}개 ·{" "}
          {numeral(order.order_pay_amount).format("0,0")}원 ({order.pay_method})
        </p>
        {/* 주문메뉴 */}
        <OrderMenu order={order}>
          <div className="btn_area mt_10">
            <button
              className="layer_ordercomplete openlayer btn s default w_100"
              onClick={onClickComplete}
            >
              완료
            </button>
          </div>
        </OrderMenu>

        <hr className="bar" />

        {/* 요청사항 */}
        <RequestMessage
          requestMessage={order?.order_reqmsg}
          deliveryMessage={order?.order_delivmsg}
          additionalMessage={order.additional_msg}
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
              </tbody>
            </table>
          </dd>
        </dl>
      </div>
    </>
  );
}
