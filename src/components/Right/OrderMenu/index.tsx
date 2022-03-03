import numeral from "numeral";
import useRight from "../useRight";
import { OrderMenusType, OrderType } from "src/types/order";
import React from "react";

export interface IOrderMenuProps {
  order: OrderType;
  children?: React.ReactNode;
}

export function OrderMenu({ order, children }: IOrderMenuProps) {
  const { getMenuAmount, getMenuCount, getMenuAllAmount } = useRight();

  return (
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
            {order.order_menus.map(
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
                {getMenuCount(order.order_menus || [])}
              </td>
              <td className="txt_r">
                {numeral(
                  getMenuAllAmount(
                    order.order_menus || [],
                    order?.order_tip_amount || 0
                  )
                ).format("0,0")}
                원
              </td>
            </tr>
          </tfoot>
        </table>
        {children}
      </dd>
    </dl>
  );
}
