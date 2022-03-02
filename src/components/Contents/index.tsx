import DeliveryContents from "../DeliveryContents";
import useTab from "../Tab/useTab";

export default function Contents() {
  const { tabIndex } = useTab();

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
