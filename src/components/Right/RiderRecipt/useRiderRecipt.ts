import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SettingService } from "src/services";
import { RootState } from "src/store";
import tabSlice from "src/store/module/tab/tabSlice";
import { DeliveryType } from "src/types/order";

const dummy = ["배달원1", "배달원2", "배달원3"];

export default function useRiderRecipt() {
  const dispatch = useDispatch();
  const { order } = useSelector((state: RootState) => state.order);
  const { deliveryType } = useSelector((state: RootState) => state.tab);
  const [deliverys, setDeliverys] = useState<any[]>([]);
  const [deliverytime, setDeliveryTime] = useState<string>("즉시");
  const [selfDeliverys, setSelfDeliverys] = useState<string[]>([]);
  const [selectedSelfDelivery, setSelectedSelfDelivery] = useState<string>("");

  /**
   * TODO 
   * - 자체배달원 불러오기
   * - 배달 대행사 시간 / 요금 불러오기
   * - 배달비/ 배달예치금 불러오기

   */

  const getDelivery = async () => {
    const data = await SettingService.getDelivery();
    setDeliverys(data);
  };

  // 라이더 호출시간 변경
  const onChangeDeliveryTime = (time: string) => {
    setDeliveryTime(time);
  };

  // 배달 타입 변경
  const onChangeDeliveryType = (type: DeliveryType) => {
    dispatch(tabSlice.actions.onChangeDeliveryType(type));
  };

  // 자체배달원 선택
  const onChangeSelfDelivery = (name: string) => {
    setSelectedSelfDelivery(name);
  };

  // 자체배달원 불러오기
  const getSelfDeliverys = () => {
    setSelfDeliverys(dummy);
    setSelectedSelfDelivery(selfDeliverys[0]);
  };

  useEffect(() => {
    getDelivery();
    getSelfDeliverys();
  }, []);

  return {
    order,
    deliverys,
    deliverytime,
    deliveryType,
    selfDeliverys,
    selectedSelfDelivery,
    onChangeDeliveryTime,
    onChangeDeliveryType,
    onChangeSelfDelivery,
  };
}
