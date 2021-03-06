import Address from "../Address";
import DeliveryInfo from "../DeliveryInfo";
import OrderMenu from "../OrderMenu";
import RequestMessage from "../RequestMessage";
import Tel from "../Tel";
import { OrderType } from "src/types/order";
import TopIcon from "../TopIcon";
import TopInfo from "../TopInfo";

export interface ICompleteReciptProps {
  order: OrderType;
}

export default function CompleteRecipt({ order }: ICompleteReciptProps) {
  return (
    <div className="in_content">
      <strong className="top_txt">
        {order.order_status} {order.order_cd}
      </strong>

      {/* 배달 채널 아이콘 */}
      <TopIcon />

      {/* 주문 정보 */}
      <TopInfo order={order} />

      <hr className="bar" />

      <div className="btn_area pt_20">
        <button className="btn s default w_100">결제 취소</button>
      </div>

      {/* 배달업체 정보 */}
      <div className="delivery_location">
        <DeliveryInfo order={order} />
      </div>

      <hr className="bar" />

      {/* 주소 */}
      <Address
        addrJibun={order?.order_addr_jibun}
        addrDoro={order?.order_addr_doro}
      />

      <hr className="bar" />

      {/* 고객 연락처 */}
      <Tel order={order} />

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
