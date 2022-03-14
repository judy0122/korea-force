import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SettingService } from "src/services";
import popupSlice from "src/store/module/popup/popupSlice";
import { DeliveryType } from "src/types/api";

export default function useDeliverySetting() {
  const dispatch = useDispatch();
  const [list, setList] = useState<DeliveryType[]>([]);

  // 배달 대행사 목록 조회
  const getDeliveryList = async () => {
    const data = await SettingService.getDeliveryList();
    setList(data);
  };

  // 배달대행사 삭제
  const onClickDelete = async (item: DeliveryType) => {
    await SettingService.deleteDelivery({
      delivery_comp_cd: item.delivery_comp_cd,
      delivery_shop_cd: item.delivery_shop_cd,
      shop_cd: item.shop_cd,
    });
    getDeliveryList();
  };

  const onClickAdd = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "addDelivery",
        value: true,
      })
    );
  };

  useEffect(() => {
    getDeliveryList();
  }, []);

  return { list, onClickDelete, onClickAdd };
}
