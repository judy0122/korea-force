import constate from "constate";
import { useState } from "react";
import { DeliveryTimeType, RejectMsgType } from "src/types/order";

function useBottom() {
  const [isShowRejectMsg, setIsShowRejectMsg] = useState<boolean>(false);
  const [isShowRejectComplete, setIsShowRejectComplete] =
    useState<boolean>(false);
  const [isShowDeliveryTime, setIsShowDeliveryTime] = useState<boolean>(false);
  const [rejectMsg, setRejectMsg] = useState<RejectMsgType>("매장사정 취소");
  const [deliveryTime, setDeliveryTime] = useState<DeliveryTimeType>("즉시");

  // 주문 거절 팝업 토글
  const onToggleIsShowRejectMsg = () => {
    setIsShowRejectMsg((prev) => {
      return !prev;
    });
  };

  // 주문 거절 완료 팝업 토글
  const onToggleIsShowRejectComplete = () => {
    setIsShowRejectComplete((prev) => {
      return !prev;
    });
  };

  // 주문 사유 선택
  const onSelectRejectMsg = (reason: RejectMsgType) => {
    setRejectMsg(reason);
  };

  // 배달 시간 팝업 토글
  const onToggleIsShowDeliveryTime = () => {
    setIsShowDeliveryTime((prev) => {
      return !prev;
    });
  };

  // 배달 시간 선택
  const onSelectDeliveryTime = (time: DeliveryTimeType) => {
    setDeliveryTime(time);
  };

  return {
    isShowRejectMsg,
    isShowRejectComplete,
    isShowDeliveryTime,
    rejectMsg,
    deliveryTime,
    onToggleIsShowRejectMsg,
    onToggleIsShowRejectComplete,
    onToggleIsShowDeliveryTime,
    onSelectRejectMsg,
    onSelectDeliveryTime,
  };
}

const [
  BottomProvider,
  useIsShowRejectMsg,
  useIsShowRejectComplete,
  useIsShowDeliveryTime,
  useRejectMsg,
  useDeliveryTime,
  useToggleIsShowRejectMsg,
  useToggleIsShowRejectComplete,
  useToggleIsShowDeliveryTime,
  useSelectRejectMsg,
  useSelectDeliveryTime,
] = constate(
  useBottom,
  (value) => value.isShowRejectMsg,
  (value) => value.isShowRejectComplete,
  (value) => value.isShowDeliveryTime,
  (value) => value.rejectMsg,
  (value) => value.deliveryTime,
  (value) => value.onToggleIsShowRejectMsg,
  (value) => value.onToggleIsShowRejectComplete,
  (value) => value.onToggleIsShowDeliveryTime,
  (value) => value.onSelectRejectMsg,
  (value) => value.onSelectDeliveryTime
);

export {
  BottomProvider,
  useIsShowRejectMsg,
  useIsShowRejectComplete,
  useIsShowDeliveryTime,
  useRejectMsg,
  useDeliveryTime,
  useToggleIsShowRejectMsg,
  useToggleIsShowRejectComplete,
  useToggleIsShowDeliveryTime,
  useSelectRejectMsg,
  useSelectDeliveryTime,
};
