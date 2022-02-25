export interface IDeliveryContentsProps {
  data?: any;
}

export default function DeliveryContents(props: IDeliveryContentsProps) {
  return (
    <div className="tb_type1">
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
          <tr>
            <td className="empty" colSpan={8}>
              주문 내역이 없습니다.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
