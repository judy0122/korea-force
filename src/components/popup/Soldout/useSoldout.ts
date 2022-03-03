import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useSoldout() {
  const dispatch = useDispatch();
  const { soldout: isShow } = useSelector((state: RootState) => state.popup);

  const onToggleIsShow = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "soldout",
        value: !isShow,
      })
    );
  };

  return {
    isShow,
    onToggleIsShow,
  };
}
