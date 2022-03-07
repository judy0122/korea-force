import useRight from "./useRight";
import { WaitingRecipt } from "./WaitingRecipt";
import { IngRecipt } from "./IngRecipt";
import { RiderRecipt } from "./RiderRecipt";

export default function Right() {
  const { order, subTabIndex, isNext } = useRight();

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
        </>
      ) : (
        <div className="in_content">
          <p className="empty">주문 정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
