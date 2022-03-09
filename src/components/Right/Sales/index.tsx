import { OrderType } from "src/types/order";

export interface ISalesProps {
  order: OrderType;
}

export default function Sales({ order }: ISalesProps) {
  return (
    <div className="in_content">
      <div className="top_txt_info">
        <em>9,000건</em>
        <strong>
          90,000,000원<span>(완료기준)</span>
        </strong>
      </div>

      <hr className="bar" />

      <dl className="tit_con_style sale">
        <dt>주문내역</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "45%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              <tr>
                <td>배달의민족</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>요기요</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>쿠팡이츠</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>네이버</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>위메프오</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>

      <hr className="bar" />

      <dl className="tit_con_style sale">
        <dt>결제수단 별</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "45%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              <tr>
                <td>결제완료</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>후불결제(카드)</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>후불결제(현금)</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>

      <hr className="bar" />

      <dl className="tit_con_style sale">
        <dt>주문타입 별</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "45%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              <tr>
                <td>전체</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>배달</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>포장</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>테이블오더</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>

      <hr className="bar" />

      <dl className="tit_con_style sale">
        <dt>주문타입 별</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "45%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              <tr>
                <td>전체</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>대기</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>처리중</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>배차대기</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>배차</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>배달중</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>완료</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>주문거절</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
              <tr>
                <td>주문취소</td>
                <td className="txt_c">2건</td>
                <td className="txt_r">12,000원</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
    </div>
  );
}
