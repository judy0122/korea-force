import dayjs from "dayjs";
import { OrderType } from "src/types/order";

export interface ITelProps {
  order: OrderType;
}

export default function Tel({ order }: ITelProps) {
  return (
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
  );
}
