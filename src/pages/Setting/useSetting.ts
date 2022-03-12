import settingSlice from "src/store/module/setting/settingSlice";
import userSlice from "src/store/module/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSimpleText } from "src/components/popup";
import { UserService } from "src/services";
import { RootState } from "src/store";
import { STORAGE_TOKEN_KEY } from "src/configs";

export default function useSetting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.user);
  const { tabIndex } = useSelector((state: RootState) => state.setting);
  const { onClickOpen } = useSimpleText();

  const onChangeTabIndex = (index: number) => {
    dispatch(settingSlice.actions.onChangeTabIndex(index));
  };

  const onClose = () => {
    dispatch(settingSlice.actions.onChangeIsSetting(false));
  };

  //로그아웃
  const onClickLogout = () => {
    onClickOpen(
      "코리아배달 주문접수",
      "로그아웃하시겠습니까?",
      async () => {
        await UserService.logout();
        dispatch(userSlice.actions.resetState());
        dispatch(settingSlice.actions.resetState());
        localStorage.removeItem(STORAGE_TOKEN_KEY);
        navigate("/login");
      },
      true
    );
  };

  return {
    name: user?.biz_name,
    tabIndex,
    onChangeTabIndex,
    onClickLogout,
    onClose,
  };
}
