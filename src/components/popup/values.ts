const rejectMsgs = [
  "매장사정 취소",
  "재료소진",
  "조리지연",
  "메뉴 및 업소정보 오류",
  "요청사항 불가",
  "기타사유",
];

const deliveryTimes = [
  "즉시",
  "10분",
  "20분",
  "30분",
  "40분",
  "50분",
  "60분",
  "90분",
  "120분",
];

const cookingTimes = ["즉시", "10분", "20분", "30분", "40분", "50분"];

const prints = ["주방주문서 + 주문전표", "주방주문서", "주문전표", "영수증"];

const cancelReasons = ["고객요청", "가게사정", "배달불가", "재료소진"];

const paymentMethods = [
  { name: "현금결제", value: "cash" },
  { name: "신용카드", value: "card" },
  { name: "기타결제", value: "other" },
  { name: "결제화면", value: "screen" },
];

/**
 * 알림 설정
 */
const alarmTypes = [
  { name: "팝업", value: "popup" },
  { name: "음성", value: "voice" },
];

export {
  rejectMsgs,
  deliveryTimes,
  cancelReasons,
  prints,
  paymentMethods,
  cookingTimes,
  alarmTypes,
};
