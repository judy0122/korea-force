import numeral from "numeral";
import { DeliveryTypes, OrderType } from "src/types/order";
import useRiderRecipt from "./useRiderRecipt";
import { deliveryTimes, deliveryTypes } from "./values";

export interface IRiderReciptProps {
  order: OrderType;
}

export default function RiderRecipt({ order }: IRiderReciptProps) {
  const {
    deliverys,
    deliverytime,
    deliveryType,
    selfDeliverys,
    selectedSelfDelivery,
    onChangeDeliveryTime,
    onChangeDeliveryType,
    onChangeSelfDelivery,
  } = useRiderRecipt();

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
          {deliveryTypes.map(({ name, value }: DeliveryTypes, index) => (
            <button
              key={index}
              className={
                value === deliveryType ? "btn s gray" : "btn s default"
              }
              onClick={() => onChangeDeliveryType(value)}
            >
              {name}
            </button>
          ))}
        </div>

        {deliveryType === "company" ? (
          <ul className="choice default_tab">
            {deliverys?.map(({ delivery_comp_nm, delivery_alias }, index) => (
              <li className="on" key={index}>
                <strong>{delivery_alias}</strong>
                <span className="red">20분</span>
                <span>55,000원</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="choice default_tab itself">
            {selfDeliverys.map((delivery, index) => (
              <li
                key={index}
                onClick={() => onChangeSelfDelivery(delivery)}
                className={selectedSelfDelivery === delivery ? "on" : ""}
              >
                <strong>{delivery}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>

      {deliveryType === "company" ? (
        <>
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
                  {deliveryTimes.map((time, index) => (
                    <li
                      key={index}
                      className={time === deliverytime ? "on" : ""}
                      onClick={() => onChangeDeliveryTime(time)}
                    >
                      {time}
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  name="time"
                  id="item"
                  value={deliverytime}
                  className="input"
                  placeholder="직접입력 가능"
                  onChange={(e) => onChangeDeliveryTime(e.target.value)}
                />
              </div>
            </dd>
          </dl>
        </>
      ) : (
        <p className="delivery_etc">
          자체 배달 직원 이용 시 배달완료 후 해당 주문을 <br />
          <strong>"완료처리"</strong> 해주세요.
        </p>
      )}
    </div>
  );
}
