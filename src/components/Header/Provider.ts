import constate from "constate";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SettingService } from "src/services";

function useHeader() {
  const location = useLocation();
  const [ismain, setIsmain] = useState<boolean>(false);
  const [shopname, setShopName] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/main") {
      setIsmain(true);
    } else {
      setIsmain(false);
    }
  }, [location]);

  const getShopInfo = async () => {
    const data = await SettingService.getShop();
    setShopName(data[0].shop_name);
  };

  useEffect(() => {
    getShopInfo();
  }, []);

  return { shopname, ismain };
}

const [Provider, useShopname, useIsmain] = constate(
  useHeader,
  (value) => value.shopname,
  (value) => value.ismain
);

export { Provider, useShopname, useIsmain };
