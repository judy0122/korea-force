import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useOrigin() {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const { origin: isShow } = useSelector((state: RootState) => state.popup);

  //원산지 설정
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "origin",
        value: !isShow,
      })
    );
  };

  const onClickSave = () => {
    // TODO 원산지 저장
  };

  return { value, isShow, onToggleIsShow, onChangeValue, onClickSave };
}
