import { useEffect, useState } from "react";
import { ManageService, SettingService } from "src/services";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { StatusType } from "src/types/common";

export default function useHeader() {
  const [ismain, setIsmain] = useState<boolean>(false);
  const [shopname, setShopName] = useState<string>("");
  const [status, setStatus] = useState<StatusType>("ING");

  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userState.user) {
      setIsmain(true);
    } else {
      setIsmain(false);
    }
  }, [userState]);

  const getShopInfo = async () => {
    const data = await SettingService.getShop();
    setShopName(data[0].shop_name);
  };

  // 운영상태 조회
  const getShopStatus = async () => {
    const { istmpstop } = await ManageService.getStatus();
    if (istmpstop === 1) {
      setStatus("TEMPSTOP");
    } else {
      setStatus("ING");
    }
  };

  useEffect(() => {
    getShopInfo();
    getShopStatus();
  }, []);

  return { shopname, ismain, status };
}
