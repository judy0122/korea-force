import { useEffect, useState } from "react";

export default function usePrintSetting() {
  const [prints, setPrints] = useState<any[]>([]);
  const [name, setName] = useState<string>("영수");
  const [selectedPrint, setSelectedPrint] = useState<number>(0);
  const [type, setType] = useState<string>("serial");
  const [model, setModel] = useState<string>("FP1100");
  const [port, setPort] = useState<string>("OK30");
  const [speed, setSpeed] = useState<string>("9600");
  const [isShowChangeName, setIsShowChangeName] = useState<boolean>(false);
  const [isShowChangeModel, setIsShowChangeModel] = useState<boolean>(false);
  const [isShowChangePort, setIsShowChangePort] = useState<boolean>(false);
  const [isShowChangeSpeed, setIsShowChangeSpeed] = useState<boolean>(false);

  const onChangeSelectedPrint = (index: number) => {
    setSelectedPrint(index);
  };

  //프린터 이름 변경
  const onChangeName = (name: string) => {
    setName(name);
    onToggleIsShowChangeName();
  };

  //프린터 이름 변경 팝업 토글
  const onToggleIsShowChangeName = () => {
    setIsShowChangeName((prev) => !prev);
  };

  // 프린터 타입 변경
  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  //모델명 변경 팝업 토글
  const onToggleIsShowChangeModel = () => {
    setIsShowChangeModel((prev) => !prev);
  };

  //모델명 변경
  const onChangeModel = (name: string) => {
    setModel(name);
    onToggleIsShowChangeModel();
  };

  //연결포트 팝업 토글
  const onToggleIsShowChangePort = () => {
    setIsShowChangePort((prev) => !prev);
  };

  //연결포트
  const onChangePort = (name: string) => {
    setPort(name);
    onToggleIsShowChangePort();
  };

  //연결속도 팝업 토글
  const onToggleIsShowChangeSpeed = () => {
    setIsShowChangeSpeed((prev) => !prev);
  };

  //연결속도
  const onChangeSpeed = (name: string) => {
    setSpeed(name);
    onToggleIsShowChangeSpeed();
  };

  useEffect(() => {
    setPrints(dummy);
  }, []);

  return {
    prints,
    name,
    selectedPrint,
    type,
    model,
    port,
    speed,
    isShowChangeName,
    isShowChangeModel,
    isShowChangePort,
    isShowChangeSpeed,
    onChangeSelectedPrint,
    onChangeName,
    onToggleIsShowChangeModel,
    onToggleIsShowChangePort,
    onToggleIsShowChangeName,
    onToggleIsShowChangeSpeed,
    onChangeType,
    onChangeModel,
    onChangePort,
    onChangeSpeed,
  };
}

const dummy = ["영수", "영수1", "영수2"];
