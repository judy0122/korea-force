import popupSlice from "src/store/module/popup/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { useState } from "react";

export default function usePrint() {
  const dispatch = useDispatch();
  const [select, setSelect] = useState<string>("주방주문서 + 주문전표");
  const { print: isShow } = useSelector((state: RootState) => state.popup);

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "print",
        value: !isShow,
      })
    );
  };

  // 프린트 종류 선택
  const onChangeSelect = (item: string) => {
    setSelect(item);
  };

  // 출력 버튼 선택
  const onClickPrint = () => {
    //TODO 출력하기
    console.log("출력하기");
    onToggleIsShow();
  };

  return {
    isShow,
    select,
    onToggleIsShow,
    onChangeSelect,
    onClickPrint,
  };
}
