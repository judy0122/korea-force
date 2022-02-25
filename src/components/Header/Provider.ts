import constate from "constate";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useHeader() {
  const location = useLocation();
  const [ismain, setIsmain] = useState<boolean>(false);
  const [shopname, setShopName] = useState<string>("");

  const onChangeShopName = (shopname: string) => {
    setShopName(shopname);
  };

  useEffect(() => {
    if (location.pathname === "/main") {
      setIsmain(true);
    } else {
      setIsmain(false);
    }
  }, [location]);

  console.log(shopname);
  return { shopname, ismain, onChangeShopName };
}

const [Provider, useShopname, useIsmain, useChangeShopName] = constate(
  useHeader,
  (value) => value.shopname,
  (value) => value.ismain,
  (value) => value.onChangeShopName
);

export { Provider, useShopname, useIsmain, useChangeShopName };
