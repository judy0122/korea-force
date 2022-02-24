import { Provider } from "./Provider";
import LoginWrapper from "./Wrapper";

const Login = () => {
  return (
    <Provider>
      <LoginWrapper />
    </Provider>
  );
};

export default Login;
