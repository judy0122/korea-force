import useRight from "./useRight";
import WaitingRecipt from "./WaitingRecipt";
import IngRecipt from "./IngRecipt";
import CompleteRecipt from "./CompleteRecipt";
import RiderRecipt from "./RiderRecipt";
import DeliveryRecipt from "./DeliveryRecipt";
import SaleRecipt from "./SaleRecipt";

export default function Right() {
  const { order, subTabIndex, tabIndex, isNext } = useRight();

  return (
    <div className="right_info">
      {order ? (
        <>
          {subTabIndex === 0 && (
            // 대기중
            <WaitingRecipt order={order} />
          )}
          {subTabIndex === 1 &&
            // 대기중
            (isNext ? (
              <RiderRecipt order={order} />
            ) : (
              <IngRecipt order={order} />
            ))}
          {subTabIndex === 2 && <DeliveryRecipt order={order} />}
          {subTabIndex === 3 && <CompleteRecipt order={order} />}
        </>
      ) : tabIndex === -1 ? (
        <SaleRecipt />
      ) : (
        <div className="in_content">
          <p className="empty">주문 정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
