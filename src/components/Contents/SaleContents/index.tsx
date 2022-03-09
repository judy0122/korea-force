import useSaleContents from "./useSaleContents";

export interface ISaleContentsProps {}

export default function SaleContents(props: ISaleContentsProps) {
  const { list } = useSaleContents();

  return (
    <div className="tb_type1">
      <table>
        <colgroup>
          <col style={{ width: "110px" }} />
          <col style={{ width: "80px" }} />
          <col style={{ width: "80px" }} />
          <col style={{ width: "45px" }} />
          <col />
          <col style={{ width: "80px" }} />
          <col style={{ width: "90px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>주문일시</th>
            <th>주문번호</th>
            <th>주문타입</th>
            <th>채널</th>
            <th>결제</th>
            <th>금액</th>
            <th>상태</th>
          </tr>
        </thead>
      </table>
      <div className="info_tb">
        <table>
          <colgroup>
            <col style={{ width: "110px" }} />
            <col style={{ width: "80px" }} />
            <col style={{ width: "80px" }} />
            <col style={{ width: "45px" }} />
            <col />
            <col style={{ width: "80px" }} />
            <col style={{ width: "90px" }} />
          </colgroup>
          <tbody>
            {list.length === 0 ? (
              <tr style={{ display: "none" }}>
                <td className="empty" colSpan={7}>
                  매출 내역이 없습니다.
                </td>
              </tr>
            ) : (
              list.map(
                (
                  {
                    date,
                    no,
                    type,
                    deliveryType,
                    deliveryTypeName,
                    payment,
                    amount,
                    status,
                  },
                  index
                ) => (
                  <tr key={index}>
                    <td>{date}</td>
                    <td>{no}</td>
                    <td>{type}</td>
                    <td>
                      <span className={`ico ${deliveryType}`}>
                        {deliveryTypeName}
                      </span>
                    </td>
                    <td>{payment}</td>
                    <td>{amount}</td>
                    <td>{status}</td>
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
