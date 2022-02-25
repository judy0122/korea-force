import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { STORAGE_AUTO_LOGIN } from "src/configs";
import LoginWrapper from "./LoginWrapper";
import { Provider } from "./Provider";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = localStorage.getItem(STORAGE_AUTO_LOGIN);
    if (autoLogin) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Provider>
      <LoginWrapper />
    </Provider>
  );
}
