import DeliveryContents from "./DeliveryContents";
import SaleContents from "./SaleContents";
import useContents from "./useContents";

export default function Contents() {
  const { tabType } = useContents();

  const renderContents = () => {
    switch (tabType) {
      case "DELIVERY":
        return <DeliveryContents />;
      case "SALES":
        return <SaleContents />;

      default:
        break;
    }
  };
  return <div>{renderContents()}</div>;
}
