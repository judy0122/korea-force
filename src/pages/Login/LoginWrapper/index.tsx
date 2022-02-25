import { Header } from "src/components";
import {
  useChangeIdValue,
  useChangeIsSaveId,
  useChangeIsSavePassword,
  useChangePasswordValue,
  useClickFindInfo,
  useClickLogin,
  useInput,
  useIsSaveId,
  useIsSavePassword,
} from "../Provider";

export default function LoginWrapper() {
  const input = useInput();
  const isSaveId = useIsSaveId();
  const isSavePassword = useIsSavePassword();
  const onChangeIdValue = useChangeIdValue();
  const onChangePasswordValue = useChangePasswordValue();
  const onClickLogin = useClickLogin();
  const onChangeIsSaveId = useChangeIsSaveId();
  const onChangeIsSavePassword = useChangeIsSavePassword();
  const onClickFindInfo = useClickFindInfo();

  return (
    <>
      <Header />
      <div className="login_wrap">
        <h2>
          <img
            src={require("@src/assets/img_title.png")}
            alt="코리아포스 로고"
          />
        </h2>
        <div className="input_area">
          <ul>
            <li>
              <input
                type="text"
                value={input.id}
                placeholder="아이디"
                onChange={onChangeIdValue}
              />
            </li>
            <li>
              <input
                type="password"
                value={input.password}
                onChange={onChangePasswordValue}
                placeholder="비밀번호"
              />
            </li>
          </ul>
          <button className="btn_login">
            <img
              src={require("@src/assets/btn_login.gif")}
              onClick={onClickLogin}
              alt="로그인"
            />
          </button>
        </div>
        <p className="txt">사장님 사이트 계정으로 로그인해 주세요.</p>
        <div className="chk_find">
          <div className="chk_wrap">
            <div className="chk_list">
              <input
                type="checkbox"
                id="idchk"
                checked={isSaveId}
                onChange={onChangeIsSaveId}
              />
              <label htmlFor="idchk">아이디 저장</label>
            </div>
            <div className="chk_list">
              <input
                type="checkbox"
                checked={isSavePassword}
                id="passwordchk"
                onChange={onChangeIsSavePassword}
              />
              <label htmlFor="passwordchk">패스워드 저장</label>
            </div>
          </div>
          <button className="find_idpw" onClick={onClickFindInfo}>
            아이디/비밀번호 찾기
          </button>
        </div>
      </div>
    </>
  );
}
