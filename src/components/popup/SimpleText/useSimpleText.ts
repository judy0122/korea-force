import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useSimpleText() {
  const dispatch = useDispatch();
  const { simple } = useSelector((state: RootState) => state.popup);

  const onClickOpen = (title: string) => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "simple",
        value: {
          isShow: true,
          title,
        },
      })
    );
  };

  const onClickClose = () => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "simple",
        value: {
          isShow: false,
          title: "",
        },
      })
    );
  };

  return {
    isShow: simple.isShow,
    title: simple.title,
    onClickOpen,
    onClickClose,
  };
}
