import { OrderType } from "src/types/order";
import Address from "../Address";
import DeliveryInfo from "../DeliveryInfo";
import OrderMenu from "../OrderMenu";
import RequestMessage from "../RequestMessage";
import Tel from "../Tel";
import TopIcon from "../TopIcon";
import TopInfo from "../TopInfo";
import useDeliveryRecipt from "./useDeliveryRecipt";

export interface IDeliveryReciptProps {
  order: OrderType;
}

export default function DeliveryRecipt({ order }: IDeliveryReciptProps) {
  const { onComplete } = useDeliveryRecipt();

  return (
    <div className="in_content">
      <strong className="top_txt">배송요청</strong>

      {/* 배달 채널 아이콘 */}
      <TopIcon />

      {/* 주문 정보 */}
      <TopInfo order={order} />

      <hr className="bar" />

      <div className="btn_area pt_20">
        <button
          className="layer_ordercomplete openlayer btn s default w_100"
          onClick={onComplete}
        >
          완료
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

      <OrderMenu order={order} />
    </div>
  );
}
