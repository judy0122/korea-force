import popupSlice from "src/store/module/popup/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";

export default function useWaitingRecipt() {
  const dispatch = useDispatch();
  const { modifyMsg: isShowMsg } = useSelector(
    (state: RootState) => state.popup
  );

  const onToggleIsShowMsg = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "modifyMsg",
        value: !isShowMsg,
      })
    );
  };

  return {
    isShowMsg,
    onToggleIsShowMsg,
  };
}
