import { useTabIndex } from "src/pages/Main/Provider";
import DeliveryContents from "../DeliveryContents";

export default function Contents() {
  const tabIndex = useTabIndex();

  const rednerContents = () => {
    switch (tabIndex) {
      case 0:
        return <DeliveryContents />;

      default:
        break;
    }
  };
  return <div>{rednerContents()}</div>;
}
