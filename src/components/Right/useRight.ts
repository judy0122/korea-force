import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { DeliveryType } from "src/types/common";
import { OptionType, OrderMenusType, OrderType } from "src/types/order";

export default function useRight() {
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("agent");
  const { subTabIndex, isNext, tabIndex } = useSelector(
    (state: RootState) => state.tab
  );
  const { order }: { order: OrderType | null } = useSelector(
    (state: RootState) => state.order
  );

  const onChangeDeliveryType = (type: DeliveryType) => {
    setDeliveryType(type);
  };

  // 메뉴 가격 구하기
  const getMenuAmount = (menuPriceAmount: number, optionList: OptionType[]) => {
    let price = 0;
    optionList.map(({ options }: OptionType) =>
      options.map(({ option_amount }) => {
        price += Number(option_amount);
      })
    );
    return price + Number(menuPriceAmount);
  };

  // 메뉴 전수량 구하기
  const getMenuCount = (menus: OrderMenusType[]) => {
    let counts = 0;
    menus.map(({ count }) => {
      counts += Number(count);
    });
    return counts;
  };

  // 메뉴 전 가격 구하기
  const getMenuAllAmount = (menus: OrderMenusType[], tipAmount: number) => {
    let amount = 0;
    menus.map(({ menu_price_amount, option_list, count }) => {
      let menuAmount = 0;
      menuAmount += menu_price_amount;
      option_list.map(({ options }: OptionType) =>
        options.map(({ option_amount }) => {
          menuAmount += option_amount;
        })
      );
      amount += menuAmount * count;
    });
    return amount + tipAmount;
  };

  return {
    deliveryType,
    subTabIndex,
    order,
    isNext,
    getMenuAmount,
    getMenuCount,
    getMenuAllAmount,
    onChangeDeliveryType,
    tabIndex,
  };
}
