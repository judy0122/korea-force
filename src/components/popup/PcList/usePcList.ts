import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SettingService } from "src/services";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function usePcList() {
  const dispatch = useDispatch();
  const [list, setList] = useState<any[]>([]);
  const [modifyCode, setModifyCode] = useState<string>("");
  const [modifyName, setModifyName] = useState<string>("");
  const { pcList: isShow } = useSelector((state: RootState) => state.popup);

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "pcList",
        value: !isShow,
      })
    );
  };

  const getPcList = async () => {
    const data = await SettingService.getPcList();
    setList(data);
  };

  // 기기 수정 버튼 클릭시
  const onClickModify = (code: string, name: string) => {
    setModifyCode(code);
    setModifyName(name);
  };

  // 기기 수정 > 기기 이름 변경
  const onChangeModifyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyName(e.target.value);
  };

  const modifyPc = async () => {
    await SettingService.modifyPc({
      device_code: modifyCode,
      device_name: modifyName,
    });
    await getPcList();
    setModifyCode("");
    setModifyName("");
  };

  const deletePc = async (code: string) => {
    await SettingService.deletePc({
      device_code: code,
    });
    await getPcList();
    setModifyCode("");
    setModifyName("");
  };

  useEffect(() => {
    getPcList();
  }, []);

  return {
    isShow,
    list,
    modifyCode,
    modifyName,
    onToggleIsShow,
    onClickModify,
    onChangeModifyName,
    modifyPc,
    deletePc,
  };
}
