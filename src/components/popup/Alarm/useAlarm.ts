import popupSlice from "src/store/module/popup/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { useState } from "react";

export default function useAlarm() {
  const dispatch = useDispatch();
  const { alarm: isShow } = useSelector((state: RootState) => state.popup);
  const [values, setValues] = useState<any>({
    newOrder: "popup",
    isShow: "popup",
    cookingStart: "popup",
    orderReject: "popup",
    orderCancel: "popup",
    soldout: "popup",
    delivery: "popup",
    deliveryInterval: "popup",
    pickupReady: "popup",
    pickup: "popup",
    complete: "popup",
  });
  const [volumns, setVolumns] = useState<any>({
    newOrder: "0",
    isShow: "0",
    cookingStart: "0",
    orderReject: "0",
    orderCancel: "0",
    soldout: "0",
    delivery: "0",
    deliveryInterval: "0",
    pickupReady: "0",
    pickup: "0",
    complete: "0",
  });
  const [isWhole, setIsWhole] = useState<boolean>(true);
  const [wholeVolumn, setWholeVolumn] = useState<string>("0");

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "alarm",
        value: !isShow,
      })
    );
  };

  // 라디오 토글
  const onChangeValue = (type: string, value: string) => {
    setValues({
      ...values,
      [type]: value,
    });
  };

  // 볼륨설정
  const onChangeVolumnValue = (type: string, value: string) => {
    setVolumns({
      ...volumns,
      [type]: value,
    });
  };

  // 알림음 일괄 볼륨 설정 여부
  const onToggleIsWhole = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsWhole(e.target.checked);
  };

  // 알림음 일괄 볼륨 설정
  const onChangeWholeVolumn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWholeVolumn(e.target.value);
    setVolumns({
      newOrder: String(e.target.value),
      isShow: String(e.target.value),
      cookingStart: String(e.target.value),
      orderReject: String(e.target.value),
      orderCancel: String(e.target.value),
      soldout: String(e.target.value),
      delivery: String(e.target.value),
      deliveryInterval: String(e.target.value),
      pickupReady: String(e.target.value),
      pickup: String(e.target.value),
      complete: String(e.target.value),
    });
  };

  return {
    values,
    volumns,
    isWhole,
    wholeVolumn,
    onToggleIsShow,
    onChangeValue,
    onToggleIsWhole,
    onChangeWholeVolumn,
    onChangeVolumnValue,
  };
}
