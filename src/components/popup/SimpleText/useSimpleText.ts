import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useSimpleText() {
  const dispatch = useDispatch();
  const { simple } = useSelector((state: RootState) => state.popup);

  const onClickOpen = (
    title: string,
    contents: string,
    onClick?: () => void,
    hasCancel?: boolean
  ) => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "simple",
        value: {
          isShow: true,
          title,
          contents,
          hasCancel,
          onClick: onClick && onClick,
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
          hasCancel: false,
          onClick: () => null,
        },
      })
    );
  };

  return {
    isShow: simple.isShow,
    title: simple.title,
    contents: simple.contents,
    hasCancel: simple.hasCancel,
    onClickOpen,
    onClickClose,
  };
}
