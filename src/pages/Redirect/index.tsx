import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "src/store";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const navigate = useNavigate();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log(userState.isLogged);
    if (userState.isLogged) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  }, [userState.isLogged]);

  return null;
}
