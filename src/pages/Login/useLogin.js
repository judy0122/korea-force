import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "src/services/auth";
import { STORAGE_TOKEN_KEY } from "src/configs";
import { useDispatch } from "react-redux";
import userSlice from "src/store/module/user/userSlice";

export default function useLogin() {
  const [input, setInput] = useState({
    id: "",
    password: "",
  });
  const [isSaveId, setIsSaveId] = useState(false);
  const [isSavePassword, setIsSavePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeIdValue = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      id: value,
    });
  };

  const onChangePasswordValue = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      password: value,
    });
  };

  // 로그인 버튼 클릭시
  const onClickLogin = async () => {
    try {
      if (input.id.length === 0) {
        alert("아이디를 입력해주세요.");
        return;
      }
      if (input.password.length === 0) {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      const { data } = await AuthService.login(input);
      console.log(data);
      const token = data.data.auth_token;
      localStorage.setItem(STORAGE_TOKEN_KEY, token);
      if (isSaveId && isSavePassword) {
        dispatch(userSlice.actions.onChangeIsLogin(true));
      } else {
        dispatch(userSlice.actions.onChangeIsLogin(false));
      }
      dispatch(userSlice.actions.onChangeUser(data.data));
      navigate("/main");
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  };

  // 아이디저장
  const onChangeIsSaveId = (e) => {
    const { checked } = e.target;
    setIsSaveId(checked);
  };

  // 패스워드 저장
  const onChangeIsSavePassword = (e) => {
    const { checked } = e.target;
    setIsSavePassword(checked);
  };

  // 아이디패스워드 찾기
  const onClickFindInfo = () => {
    console.log("아이디패스워드 찾기");
  };

  return {
    input,
    isSaveId,
    isSavePassword,
    onChangeIdValue,
    onChangePasswordValue,
    onClickLogin,
    onChangeIsSaveId,
    onChangeIsSavePassword,
    onClickFindInfo,
  };
}
