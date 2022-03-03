import useRight from "./useRight";
import { WaitingRecipt } from "./WaitingRecipt";
import { IngRecipt } from "./IngRecipt";

export default function Right() {
  const { order, deliverytabIndex } = useRight();

  return (
    <div className="right_info">
      {order ? (
        <>
          {deliverytabIndex === 0 && (
            // 대기중
            <WaitingRecipt order={order} />
          )}
          {deliverytabIndex === 1 && (
            // 대기중
            <IngRecipt order={order} />
          )}
        </>
      ) : (
        <div className="in_content">
          <p className="empty">주문 정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
