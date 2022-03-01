import { OrdersType } from "src/types/order";
import {
  useList,
  useSelectedOrder,
  useChangeSelectedOrder,
} from "src/pages/Main/Provider";

export default function DeliveryContents() {
  const list = useList();
  const selectedOrder = useSelectedOrder();
  const onChangeSelectedOrder = useChangeSelectedOrder();

  return (
    <div className="tb_type1 info_tb">
      <table>
        <colgroup>
          <col style={{ width: 95 }} />
          <col style={{ width: 80 }} />
          <col style={{ width: 70 }} />
          <col style={{ width: 45 }} />
          <col style={{ width: 70 }} />
          <col />
          <col style={{ width: 70 }} />
          <col style={{ width: 80 }} />
        </colgroup>
        <thead>
          <tr>
            <th>주문번호</th>
            <th>주문채널</th>
            <th>주문타입</th>
            <th>메뉴</th>
            <th>결제수단</th>
            <th>주문금액</th>
            <th>경과시간</th>
            <th>주문상태</th>
          </tr>
        </thead>
      </table>
      <div className="info_tb">
        <table>
          <colgroup>
            <col style={{ width: 95 }} />
            <col style={{ width: 80 }} />
            <col style={{ width: 70 }} />
            <col style={{ width: 45 }} />
            <col style={{ width: 70 }} />
            <col />
            <col style={{ width: 70 }} />
            <col style={{ width: 80 }} />
          </colgroup>
          <tbody>
            {list.length == 0 ? (
              <tr>
                <td className="empty" colSpan={8}>
                  주문 내역이 없습니다.
                </td>
              </tr>
            ) : (
              list.map(
                (
                  {
                    order_cd,
                    order_delivgb,
                    pay_method,
                    order_amount,
                    order_menus,
                  }: OrdersType,
                  index
                ) => (
                  <tr
                    key={index}
                    onClick={() => onChangeSelectedOrder(index)}
                    className={selectedOrder === index ? "active" : ""}
                  >
                    <td>{order_cd}</td>
                    <td>
                      <span className="ico style1">배민</span>
                    </td>
                    <td>{order_delivgb}</td>
                    <td>{order_menus[0].menu_name}</td>
                    <td>{pay_method}</td>
                    <td>{order_amount}</td>
                    <td>
                      <span className="blue">25</span>
                    </td>
                    <td>처리중</td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
