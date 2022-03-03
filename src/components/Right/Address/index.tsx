export interface IAddressProps {
  addrJibun: string;
  addrDoro: string;
}

export default function Address({ addrJibun, addrDoro }: IAddressProps) {
  return (
    <dl className="tit_con_style">
      <dt>배달주소</dt>
      <dd>
        <table>
          <tbody>
            <tr>
              <td>[지번] {addrJibun}</td>
            </tr>
            <tr>
              <td>[도로명] {addrDoro}</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
  );
}
