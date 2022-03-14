import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SettingService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";
import { DeliveryType } from "src/types/api";

export default function useAddDelivery() {
  const dispatch = useDispatch();
  const [list, setList] = useState<DeliveryType[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const { addDelivery: isShow } = useSelector(
    (state: RootState) => state.popup
  );

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "addDelivery",
        value: !isShow,
      })
    );
  };

  // 배달 대행사 목록 조회
  const getNewDeliveryList = async () => {
    const data = await SettingService.getDeliveryNewList();
    setList(data);
  };

  // 추가할 배달 대행사 선택
  const onChangeSelected = (index: number) => {
    setSelected(index);
  };

  // 배달 대행사 추가
  const onClickAdd = async () => {
    const payload = {
      delivery_alias: list[selected].delivery_alias,
      delivery_comp_cd: list[selected].delivery_comp_cd,
      delivery_shop_cd: list[selected].delivery_shop_cd,
      shop_cd: list[selected].shop_cd,
    };
    await SettingService.addDelivery(payload);
    onToggleIsShow();
  };

  useEffect(() => {
    getNewDeliveryList();
  }, []);

  return { list, selected, onToggleIsShow, onChangeSelected, onClickAdd };
}
