import DeliveryContents from "../DeliveryContents";
import useContents from "./useContents";

export default function Contents() {
  const { tabType } = useContents();

  const rednerContents = () => {
    switch (tabType) {
      case "DELIVERY":
        return <DeliveryContents />;

      default:
        break;
    }
  };
  return <div>{rednerContents()}</div>;
}
