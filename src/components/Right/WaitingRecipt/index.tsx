import numeral from "numeral";
import { ModifyMsgPopup } from "src/components/popup";
import {
  useGetMenuAmount,
  useGetMenuCount,
  useGetMenuAllAmount,
  useIsShowMsg,
  useToggleIsShowMsg,
} from "src/pages/Main/Provider";
import { OrderMenusType, OrderType } from "src/types/order";

export interface IWaitingReciptProps {
  order: OrderType;
}

export function WaitingRecipt({ order }: IWaitingReciptProps) {
  const getMenuAmount = useGetMenuAmount();
  const getMenuCount = useGetMenuCount();
  const getMenuAllAmount = useGetMenuAllAmount();
  const isShowMsg = useIsShowMsg();
  const onToggleIsShowMsg = useToggleIsShowMsg();

  return (
    <>
      <dl className="tit_con_style first">
        <dt>주문내역</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "auto" }} />
              <col style={{ width: "5%" }} />
              <col style={{ width: "30%" }} />
            </colgroup>
            <tbody>
              {order?.order_menus.map(
                (
                  {
                    menu_name,
                    menu_price_amount,
                    option_list,
                    count,
                  }: OrderMenusType,
                  index
                ) => (
                  <tr key={index}>
                    <td>
                      <strong>{menu_name}</strong>
                      <ul className="option">
                        {option_list.map(({ options }) =>
                          options.map(
                            ({ option_name, option_amount }, optionIndex) => (
                              <li key={optionIndex}>
                                + {option_name} (
                                {numeral(option_amount).format("0,0")})
                              </li>
                            )
                          )
                        )}
                      </ul>
                    </td>
                    <td className="txt_r">{count}</td>
                    <td className="txt_r">
                      {numeral(
                        getMenuAmount(menu_price_amount, option_list)
                      ).format("0,0")}
                      원
                    </td>
                  </tr>
                )
              )}
              <tr>
                <td colSpan={2}>
                  <strong>배달팁</strong>
                </td>
                <td className="txt_r">
                  {numeral(order?.order_tip_amount).format("0,0")}원
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="txt_r" colSpan={2}>
                  {getMenuCount(order?.order_menus || [])}
                </td>
                <td className="txt_r">
                  {numeral(
                    getMenuAllAmount(
                      order?.order_menus || [],
                      order?.order_tip_amount || 0
                    )
                  ).format("0,0")}
                  원
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="btn_area">
            {/* 지도보기 기능 구현 */}
            <button className="btn s default">지도보기</button>
            <button
              className="layer_request_modify openlayer btn s default"
              onClick={onToggleIsShowMsg}
            >
              요청수정
            </button>
          </div>
        </dd>
      </dl>
      <hr className="bar" />

      <dl className="tit_con_style">
        <dt>요청사항</dt>
        <dd>
          <table>
            <colgroup>
              <col style={{ width: "35%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <tbody>
              {order?.order_reqmsg && (
                <tr>
                  <td>
                    <strong>가게</strong>
                  </td>
                  <td>{order?.order_reqmsg}</td>
                </tr>
              )}
              {order?.order_delivmsg && (
                <tr>
                  <td>
                    <strong>배달</strong>
                  </td>
                  <td>{order?.order_delivmsg}</td>
                </tr>
              )}
              <tr>
                <td>
                  <strong>추가요청 사항</strong>
                </td>
                <td className="gray">
                  {order.additional_msg || "요청사항이 없습니다."}
                </td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>

      <hr className="bar" />
      <dl className="tit_con_style">
        <dt>배달주소</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>[지번] {order?.order_addr_jibun}</td>
              </tr>
              <tr>
                <td>[도로명] {order?.order_addr_doro}</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      <hr className="bar" />

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
                <td colSpan={2}>{order?.order_tel}</td>
              </tr>
              <tr>
                <td colSpan={2} className="gray pb_10">
                  고객 안심번호는 3시간동안만 유효합니다
                </td>
              </tr>
              <tr>
                <td>주문번호</td>
                <td>{order?.order_cd}</td>
              </tr>
              <tr>
                <td>주문시간</td>
                <td>{order?.order_dtime}</td>
              </tr>
              <tr>
                <td>가게정보</td>
                <td>{order?.shop_name}</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      {isShowMsg && (
        <ModifyMsgPopup
          requestmsg={order?.order_reqmsg}
          deliverymsg={order?.order_delivmsg}
          onClose={onToggleIsShowMsg}
        />
      )}
    </>
  );
}
