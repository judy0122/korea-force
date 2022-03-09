import useWaitingRecipt from "./useWaitingRecipt";
import Address from "../Address";
import Tel from "../Tel";
import TopIcon from "../TopIcon";
import { ModifyMsgPopup } from "src/components/popup";
import { OrderType } from "src/types/order";
import OrderMenu from "../OrderMenu";
import RequestMessage from "../RequestMessage";

export interface IWaitingReciptProps {
  order: OrderType;
}

export default function WaitingRecipt({ order }: IWaitingReciptProps) {
  const { isShowMsg, onToggleIsShowMsg } = useWaitingRecipt();

  return (
    <>
      <div className="in_content">
        <strong className="top_txt">
          {order.order_status} {order.order_cd}
        </strong>

        {/* 배달 채널 아이콘 */}
        <TopIcon />

        <p className="order_txt">메뉴 2개 · 15,000원 (결제완료)</p>
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

        {/* 고객연락처 */}
        <Tel order={order} />

        {isShowMsg && (
          <ModifyMsgPopup
            requestmsg={order?.order_reqmsg}
            deliverymsg={order?.order_delivmsg}
            msg={order.additional_msg}
            onClose={onToggleIsShowMsg}
          />
        )}
      </div>
    </>
  );
}
