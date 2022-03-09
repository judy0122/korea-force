import { OrderType } from "src/types/order";

export interface IDeliveryInfoProps {
  order: OrderType;
}

export default function DeliveryInfo({ order }: IDeliveryInfoProps) {
  // TODO 배달업체/비용/라이더 정보 넣기
  return (
    <div className="top_info">
      <table>
        <colgroup>
          <col style={{ width: "35%" }} />
          <col style={{ width: "auto" }} />
        </colgroup>
        <tbody>
          <tr>
            <td colSpan={3}>
              <ul>
                <li>
                  <span>배달업체</span>
                  바로고
                </li>
                <li>
                  <span>비용</span>
                  3,300원 (할증 500원)
                </li>
                <li>
                  <span>라이더</span>
                  미정
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
