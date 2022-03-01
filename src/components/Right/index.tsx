import {
  useDeliverytabIndex,
  useDeliveryType,
  useOrder,
  useChangeDeliveryType,
} from "src/pages/Main/Provider";
import { deliverys } from "../SubTab/values";
import { deliveryMethods } from "./values";
import { WaitingRecipt } from "./WaitingRecipt";

export interface IRightProps {}

export default function Right(props: IRightProps) {
  const deliveryType = useDeliveryType();
  const deliverytabIndex = useDeliverytabIndex();
  const onChangeDeliveryType = useChangeDeliveryType();
  const order = useOrder();

  return (
    <div className="right_info">
      <div className="in_content">
        <strong className="top_txt">
          {deliverys[deliverytabIndex]} 000{order?.order_menus.length}
        </strong>

        <ul className="top_ico">
          <li>
            <span className="ico delivery">배달</span>
          </li>
          <li>
            {/* TODO :주문채널 */}
            <span className="ico style1">배민</span>
          </li>
        </ul>
        {deliverytabIndex === 0 ? (
          // 대기중
          order && <WaitingRecipt order={order} />
        ) : (
          <>
            <div className="top_info">
              <table>
                <colgroup>
                  <col style={{ width: 35 }} />
                  <col style={{ width: "5%" }} />
                  <col style={{ width: "30%" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>결제 할 금액</th>
                    <td>{order?.pay_method}</td>
                    <td className="red txt_r">24,000원</td>
                  </tr>
                  <tr className="top_border">
                    <th colSpan={3}>배달주소</th>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <ul>
                        <li>[지번] 배민구 배민동 배민아파트 101동 2103호</li>
                        <li>[도로명] 배민구 배민로 배민아파트 101동</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="bar" />

            <div className="delivery_type">
              <div className="btn_area txt_l tab_type3">
                {deliveryMethods.map(({ title, value }, index) => (
                  <button
                    key={index}
                    className={`btn s ${
                      value === deliveryType ? "default" : "gray"
                    }`}
                    onClick={() => onChangeDeliveryType(value)}
                  >
                    {title}
                  </button>
                ))}
              </div>

              <ul className="choice default_tab itself">
                <li className="on">
                  <strong>배달원1</strong>
                </li>
                <li>
                  <strong>배달원2</strong>
                </li>
                <li>
                  <strong>배달원3</strong>
                </li>
              </ul>
            </div>

            <p className="delivery_etc">
              자체 배달 직원 이용 시 배달완료 후 해당 주문을 <br />
              <strong>"완료처리"</strong> 해주세요.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
