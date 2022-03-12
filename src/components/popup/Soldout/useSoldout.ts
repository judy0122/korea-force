import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";
import tabSlice from "src/store/module/tab/tabSlice";
import useSimpleText from "../SimpleText/useSimpleText";

export default function useSoldout() {
  const dispatch = useDispatch();
  const { soldout: isShow } = useSelector((state: RootState) => state.popup);
  const { order } = useSelector((state: RootState) => state.order);
  const [selectedMenus, setSelectedMenus] = useState<string[]>([]);
  const { onClickOpen } = useSimpleText();

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "soldout",
        value: !isShow,
      })
    );
  };

  const onChangeMenus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedMenus.includes(e.target.id)) {
      const newMenus = selectedMenus.filter((code) => code !== e.target.id);
      setSelectedMenus(newMenus);
    } else {
      const newMenus = [...selectedMenus];
      newMenus.push(e.target.id);
      setSelectedMenus(newMenus);
    }
  };

  const onClickSoldout = async () => {
    const parmas = selectedMenus.map((menu) => ({
      menu_cd: menu,
    }));
    await OrderService.soldoutMenu(parmas);
    onToggleIsShow();
    onClickOpen(
      "메뉴 품절 처리 완료",
      "품절 처리가 성공적으로 반영되었습니다."
    );
    await OrderService.rejectOrder(order?.order_cd || "", "재료소진");
    dispatch(tabSlice.actions.onChangeSubTabIndex(3));
  };

  return {
    menus: order?.order_menus || [],
    isShow,
    selectedMenus,
    onToggleIsShow,
    onClickSoldout,
    onChangeMenus,
  };
}
