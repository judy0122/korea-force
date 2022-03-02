import { Header, Right, Left, Bottom } from "src/components";

export default function Main() {
  return (
    <>
      <Header />
      <div className="order_info_cont">
        <Left />
        <Right />
        <Bottom />
        {/* popup */}
        {/* <NewOrder /> */}
      </div>
    </>
  );
}
