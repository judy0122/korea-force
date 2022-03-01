import constate from "constate";
import { useEffect, useState } from "react";
import { OrderService } from "src/services";

const dummyData = [
  {
    order_status: "주문구분(1:주문대기,2:처리중, 3:완료)",
    order_cnt: "주문횟수",
  },
];

function useTab() {
  const [counts, setCounts] = useState<number[]>([]);

  const getOrderCount = async () => {
    const reponse = await OrderService.getCount(0);
    //  TODO dummy data 만들어서 구현하기...
  };

  useEffect(() => {
    getOrderCount();
  }, []);

  return { counts };
}

const [Provider, useCounts] = constate(useTab, (value) => value.counts);

export { Provider, useCounts };
