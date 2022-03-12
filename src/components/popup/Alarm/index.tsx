import CommonPopup from "../CommonPopup";
import AlarmItem from "./AlarmItem";
import useAlarm from "./useAlarm";

export default function AlarmPopup() {
  const {
    values,
    isWhole,
    wholeVolumn,
    volumns,
    onToggleIsShow,
    onChangeValue,
    onToggleIsWhole,
    onChangeWholeVolumn,
    onChangeVolumnValue,
  } = useAlarm();

  return (
    <CommonPopup title="알림 설정" size="lg" onClose={onToggleIsShow}>
      <div className="con">
        <div className="notice_chk">
          <div className="top_area">
            <ul className="first">
              {/* 신규주문 */}
              <AlarmItem
                name="신규주문 알람"
                type="newOrder"
                checked={values.newOrder}
                volumn={volumns.newOrder}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />

              {/* 조리시작 */}
              <AlarmItem
                name="조리시작"
                type="cookingStart"
                checked={values.cookingStart}
                volumn={volumns.cookingStart}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 주문거절 */}
              <AlarmItem
                name="주문거절"
                type="orderReject"
                checked={values.orderReject}
                volumn={volumns.orderReject}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 주문취소 */}
              <AlarmItem
                name="주문거절"
                type="orderCancel"
                checked={values.orderCancel}
                volumn={volumns.orderCancel}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 메뉴품절 */}
              <AlarmItem
                name="주문거절"
                type="soldout"
                checked={values.soldout}
                volumn={volumns.soldout}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
            </ul>
            <ul>
              {/* 배달대행 접수 */}
              <AlarmItem
                name="배달대행 접수"
                type="delivery"
                checked={values.delivery}
                volumn={volumns.delivery}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 배차 */}
              <AlarmItem
                name="배달대행 접수"
                type="deliveryInterval"
                checked={values.deliveryInterval}
                volumn={volumns.deliveryInterval}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 픽업예정 */}
              <AlarmItem
                name="픽업예정"
                type="pickupReady"
                checked={values.pickupReady}
                volumn={volumns.pickupReady}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 픽업 */}
              <AlarmItem
                name="픽업"
                type="pickup"
                checked={values.pickup}
                volumn={volumns.pickup}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
              {/* 완료 */}
              <AlarmItem
                name="완료"
                type="complete"
                checked={values.complete}
                volumn={volumns.complete}
                onChange={onChangeValue}
                onChangeVolumn={onChangeVolumnValue}
              />
            </ul>
          </div>

          <div className="bottom_bottom">
            <div className="chk_list type2">
              <input
                type="checkbox"
                name="volumeset"
                id="volumeset"
                checked={isWhole}
                onChange={onToggleIsWhole}
              />
              <label htmlFor="volumeset">알림음 일괄 볼륨 설정</label>
            </div>

            <div className="rangeSlide">
              <input
                disabled={!isWhole}
                type="range"
                min="0"
                max="100"
                data-rangeslider
                value={wholeVolumn}
                onChange={onChangeWholeVolumn}
              />
              <div className="count">
                <output>{wholeVolumn}</output>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            닫기
          </a>
          <a href="#;" className="btn m gray">
            저장
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
