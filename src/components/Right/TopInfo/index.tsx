import dayjs from "dayjs";
import numeral from "numeral";
import { OrderType } from "src/types/order";

export interface ITopInfoProps {
  order: OrderType;
}

export default function TopInfo({ order }: ITopInfoProps) {
  return (
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
  );
}
