import constate from "constate";
import { useState } from "react";

function useLogin() {
  const [input, setInput] = useState({
    id: "",
    password: "",
  });
  const [isSaveId, setIsSaveId] = useState(false);
  const [isSavePassword, setIsSavePassword] = useState(false);

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
  const onClickLogin = () => {
    console.log("로그인");
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

const [
  Provider,
  useInput,
  useIsSaveId,
  useIsSavePassword,
  useChangeIdValue,
  useChangePasswordValue,
  useClickLogin,
  useChangeIsSaveId,
  useChangeIsSavePassword,
  useClickFindInfo,
] = constate(
  useLogin,
  (value) => value.input,
  (value) => value.isSaveId,
  (value) => value.isSavePassword,
  (value) => value.onChangeIdValue,
  (value) => value.onChangePasswordValue,
  (value) => value.onClickLogin,
  (value) => value.onChangeIsSaveId,
  (value) => value.onChangeIsSavePassword,
  (value) => value.onClickFindInfo
);

export {
  Provider,
  useInput,
  useIsSaveId,
  useIsSavePassword,
  useChangeIdValue,
  useChangePasswordValue,
  useClickLogin,
  useChangeIsSaveId,
  useChangeIsSavePassword,
  useClickFindInfo,
};
