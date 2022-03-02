import { Header } from "src/components";
import useLogin from "./useLogin";

export default function Login() {
  const {
    input,
    isSaveId,
    isSavePassword,
    onChangeIdValue,
    onChangePasswordValue,
    onClickLogin,
    onChangeIsSaveId,
    onChangeIsSavePassword,
    onClickFindInfo,
  } = useLogin();

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
