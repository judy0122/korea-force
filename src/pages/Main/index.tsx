import { Header, Right, Left, Bottom } from "src/components";
import { BottomProvider } from "src/components/Bottom/Provider";
import { Provider } from "./Provider";

export default function Main() {
  return (
    <Provider>
      <Header />
      <div className="order_info_cont">
        <Left />
        <Right />
        <BottomProvider>
          <Bottom />
        </BottomProvider>
        {/* popup */}
        {/* <NewOrder /> */}
      </div>
    </Provider>
  );
}
