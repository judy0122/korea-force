import { useEffect, useState } from "react";
import { ManageService, SettingService } from "src/services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { StatusType } from "src/types/common";
import settingSlice from "src/store/module/setting/settingSlice";

export default function useHeader() {
  const dispatch = useDispatch();
  const [ismain, setIsmain] = useState<boolean>(false);
  const [shopname, setShopName] = useState<string>("");
  const [status, setStatus] = useState<StatusType>("ING");

  const userState = useSelector((state: RootState) => state.user);
  const { isSetting } = useSelector((state: RootState) => state.setting);

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

  // 설정버튼 클릭
  const onClickSetting = () => {
    dispatch(settingSlice.actions.onChangeIsSetting(!isSetting));
  };

  useEffect(() => {
    if (userState.isLogged) {
      getShopInfo();
      getShopStatus();
    }
  }, []);

  return { isSetting, shopname, ismain, status, onClickSetting };
}
