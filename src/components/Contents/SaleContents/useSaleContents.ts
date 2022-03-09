import { useEffect, useState } from "react";

const dummy = Array(5)
  .fill("0")
  .map((e, i) => ({
    date: "12.23 15:00",
    no: "ABC34253",
    type: "배달",
    deliveryType: "baemin1",
    deliveryTypeName: "배민1",
    payment: "후불(카드)",
    amount: "25,500",
    status: "대기",
  }));

export default function useSaleContents() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    setList(dummy);
  }, []);

  return { list };
}
