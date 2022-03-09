export interface IRequestMessageProps {
  requestMessage?: string;
  deliveryMessage?: string;
  additionalMessage?: string;
}

export default function RequestMessage({
  requestMessage,
  deliveryMessage,
  additionalMessage,
}: IRequestMessageProps) {
  return (
    <dl className="tit_con_style">
      <dt>요청사항</dt>
      <dd>
        <table>
          <colgroup>
            <col style={{ width: "35%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <strong>가게</strong>
              </td>
              <td>{requestMessage || "요청사항이 없습니다."}</td>
            </tr>
            <tr>
              <td>
                <strong>배달</strong>
              </td>
              <td>{deliveryMessage || "요청사항이 없습니다."}</td>
            </tr>
            <tr>
              <td>
                <strong>추가요청 사항</strong>
              </td>
              <td className="gray">
                {additionalMessage || "요청사항이 없습니다."}
              </td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
  );
}
