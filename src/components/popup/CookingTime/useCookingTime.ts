import popupSlice from "src/store/module/popup/popupSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { CookingTimeType } from "src/types/order";

export default function useCookingTimePopup() {
  const dispatch = useDispatch();
  const [time, setTime] = useState<CookingTimeType>("즉시");
  const { cookingTime: isShow } = useSelector(
    (state: RootState) => state.popup
  );

  // 조리 시간 선택
  const onSelectTime = (time: CookingTimeType) => {
    setTime(time);
  };

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "cookingTime",
        value: !isShow,
      })
    );
  };

  //조리시간 설정
  const onChangeCookingTime = () => {
    //TODO 조리시간설정
  };

  return { isShow, time, onToggleIsShow, onSelectTime, onChangeCookingTime };
}
