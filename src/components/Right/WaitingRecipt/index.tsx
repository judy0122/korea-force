import useWaitingRecipt from "./useWaitingRecipt";
import Address from "../Address";
import { ModifyMsgPopup } from "src/components/popup";
import { OrderType } from "src/types/order";
import { OrderMenu } from "../OrderMenu";
import { RequestMessage } from "../RequestMessage";

export interface IWaitingReciptProps {
  order: OrderType;
}

export function WaitingRecipt({ order }: IWaitingReciptProps) {
  const { isShowMsg, onToggleIsShowMsg } = useWaitingRecipt();

  return (
    <>
      <hr className="bar" />
      {/* 주문메뉴 */}
      <OrderMenu order={order}>
        <div className="btn_area">
          {/* 지도보기 기능 구현 */}
          <button className="btn s default">지도보기</button>
          <button
            className="layer_request_modify openlayer btn s default"
            onClick={onToggleIsShowMsg}
          >
            요청수정
          </button>
        </div>
      </OrderMenu>
      {/* 요청사항 */}
      <RequestMessage
        requestMessage={order?.order_reqmsg}
        deliveryMessage={order?.order_delivmsg}
        additionalMessage={order.additional_msg}
      />
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
                <td>{order?.order_cd}</td>
              </tr>
              <tr>
                <td>주문시간</td>
                <td>{order?.order_dtime}</td>
              </tr>
              <tr>
                <td>가게정보</td>
                <td>{order?.shop_name}</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      {isShowMsg && (
        <ModifyMsgPopup
          requestmsg={order?.order_reqmsg}
          deliverymsg={order?.order_delivmsg}
          msg={order.additional_msg}
          onClose={onToggleIsShowMsg}
        />
      )}
    </>
  );
}
