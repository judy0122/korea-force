import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";
import { OptionType, OrderMenusType } from "src/types/order";

export default function useWaitingRecipt() {
  const dispatch = useDispatch();
  const { modifyMsg: isShowMsg } = useSelector(
    (state: RootState) => state.popup
  );

  // 메뉴 가격 구하기
  const getMenuAmount = (menuPriceAmount: number, optionList: OptionType[]) => {
    let price = 0;
    optionList.map(({ options }: OptionType) =>
      options.map(({ option_amount }) => {
        price += option_amount;
      })
    );
    return price + menuPriceAmount;
  };

  // 메뉴 전수량 구하기
  const getMenuCount = (menus: OrderMenusType[]) => {
    let counts = 0;
    menus.map(({ count }) => {
      counts += count;
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

  const onToggleIsShowMsg = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "modifyMsg",
        value: !isShowMsg,
      })
    );
  };

  return {
    isShowMsg,
    getMenuAmount,
    getMenuCount,
    getMenuAllAmount,
    onToggleIsShowMsg,
  };
}
