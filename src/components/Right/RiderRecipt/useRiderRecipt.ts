import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SettingService } from "src/services";
import { RootState } from "src/store";

const dummy = [
  {
    shop_cd: 1234,
    delivery_comp_cd: "배달대행업체코드",
    delivery_comp_nm: "배달대행업체명",
    delivery_shop_cd: "배달대행업체매장코드",
    delivery_alias: "별칭",
  },
];

export default function useRiderRecipt() {
  const { order } = useSelector((state: RootState) => state.order);
  const [deliverys, setDeliverys] = useState<any[]>([]);

  const getDelivery = async () => {
    const data = await SettingService.getDelivery();
    console.log(data);
    setDeliverys(dummy);
  };

  useEffect(() => {
    console.log("asd");
    getDelivery();
  }, []);

  return { order, deliverys };
}
