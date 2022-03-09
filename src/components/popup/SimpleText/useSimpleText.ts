import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import popupSlice from "src/store/module/popup/popupSlice";

export default function useSimpleText() {
  const dispatch = useDispatch();
  const { simple } = useSelector((state: RootState) => state.popup);

  const onClickOpen = (
    title: string,
    contents: string,
    onClick?: () => void
  ) => {
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "simple",
        value: {
          isShow: true,
          title,
          contents,
          onClick: onClick && onClick,
        },
      })
    );
  };

  const onClickClose = () => {
    simple.onClick();
    dispatch(
      popupSlice.actions.onChangeIsShow({
        name: "simple",
        value: {
          isShow: false,
          title: "",
          onClick: () => null,
        },
      })
    );
  };

  return {
    isShow: simple.isShow,
    title: simple.title,
    contents: simple.contents,
    onClickOpen,
    onClickClose,
  };
}
