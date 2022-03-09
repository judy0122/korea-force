import Address from "../Address";
import { OrderType } from "src/types/order";
import TopInfo from "../TopInfo";

export interface IWaitingCookingReciptProps {
  order: OrderType;
}

export default function IngCookingRecipt({
  order,
}: IWaitingCookingReciptProps) {
  return (
    <div className="right_info">
      <div className="in_content">
        <strong className="top_txt">조리대기 0002</strong>

        <ul className="top_ico">
          <li>
            <span className="ico baemin1">배민1</span>
          </li>
        </ul>

        {/* 주문 정보 */}
        <TopInfo order={order} />

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
