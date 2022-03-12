import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SettingService } from "src/services";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useOperationSetting() {
  const dispatch = useDispatch();
  const [isStart, setIsStart] = useState<boolean>(false);
  const [version, setVersion] = useState<string>("");
  const [isOrigin, setIsOrigin] = useState<boolean>(false);
  const [widgetSetting, setWidgetSetting] = useState<string>("use");
  const [alarmSetting, setAlarmSetting] = useState<string>("use");
  const [blinkSetting, setBlinkSetting] = useState<string>("use");

  // PC 켤 때마다 자동실행
  const onToggleIsStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsStart(e.target.checked);
  };

  // 기기관리 목록 조회
  const onClickPcList = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "pcList",
        value: true,
      })
    );
  };

  // 버전 조회
  const getVersion = async () => {
    const data = await SettingService.getVersion();
    setVersion(data.version);
  };

  // 배달시간 설정
  const onClickDeliveryTime = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "deliveryTime",
        value: true,
      })
    );
  };

  // 조리시간 설정
  const onClickCookingTime = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "cookingTime",
        value: true,
      })
    );
  };

  //원산지 설정
  const onToggleIsOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOrigin(e.target.checked);
  };

  // 원산지 수정버튼 클릭시
  const onClickOriginSetting = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "origin",
        value: true,
      })
    );
  };

  // 위젯설정 사용유무
  const onChangeWidgetSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidgetSetting(e.target.value);
  };

  // 알림 사용유무
  const onChangeAlarmSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlarmSetting(e.target.value);
  };

  // 알림 수정 버튼 클릭시
  const onClickAlarmSetting = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "alarm",
        value: true,
      })
    );
  };

  // 알림깜빡임 표시
  const onChangeBlinkSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlinkSetting(e.target.value);
  };

  // 업데이트 클릭시
  const onClickUpdate = () => {
    // TODO 업데이트 클릭시 p109
  };

  useEffect(() => {
    getVersion();
  }, []);

  return {
    blinkSetting,
    isStart,
    version,
    isOrigin,
    widgetSetting,
    alarmSetting,
    onToggleIsStart,
    onClickPcList,
    onClickDeliveryTime,
    onClickCookingTime,
    onToggleIsOrigin,
    onClickOriginSetting,
    onChangeWidgetSetting,
    onChangeAlarmSetting,
    onClickAlarmSetting,
    onChangeBlinkSetting,
    onClickUpdate,
  };
}
