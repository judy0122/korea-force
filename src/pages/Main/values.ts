import { OrdersType, OrderType } from "src/types/order";

export const dummyData: OrdersType[] = Array(3)
  .fill(3)
  .map((e, i) => ({
    order_cd: (202007031 + i).toString(),
    order_dtime: "주문일시",
    order_menus: [
      {
        menu_cd: 100,
        menu_name: "메뉴명",
        menu_price_cd: 100,
        menu_price_name: "메뉴가격명",
        menu_price_amount: 100,
        option_list: [
          {
            option_group_cd: 100,
            option_group_name: "옵션그룹명",
            options: [
              {
                option_cd: 100,
                option_name: "옵션명",
                option_amount: 100,
              },
            ],
          },
        ],
        count: 10,
      },
    ],
    order_amount: 1000,
    order_tip_amount: 1000,
    order_pay_amount: 1000,
    pay_method: "결제구분(바로결제,만나서결제)",
    order_delivgb: "배달,픽업,매장",
    order_status: "접수대기,처리중,완료",
    reqmsg: 1, //메세지잇음(1),없음(0),
    level_gubun: "단골",
    regular_count: "단골수",
    order_predtime: 100,
    remaining_time: 100,
    order_reqmsg: "가게요청사항",
    order_delivmsg: "배달요청사항",
    order_addr_doro: "도로명주소",
    order_addr_jibun: "지번주소",
    order_addr_detail: "상세주소",
    order_safetel: 1, // 가상번호사용여부(1/0),
    order_safe_telno: "가상전화번호",
    order_tel: "전화번호",
    order_point: 1000,
    order_coupon: 1000,
    order_stamp: 1000,
    order_pickup_amount: 1000,
    order_disposable: 1, //1회용품미사용여부(1:미사용,0:사용),
    order_discount: [],
  }));

export const dummyOrder: OrderType = {
  shop_cd: "매장코드",
  shop_name: "매장명",
  order_cd: "2020070315422115300001",
  order_status: "배달완료",
  order_amount: 10000,
  order_coupon: 10000,
  order_point: 10000,
  order_stamp: 10000,
  order_tip_amount: 8000,
  order_pay_amount: 10000,
  order_menus: [
    {
      menu_cd: 10000,
      menu_name: "메뉴명",
      menu_price_cd: 10000,
      menu_price_name: "메뉴가격명",
      menu_price_amount: 12000,
      option_list: [
        {
          option_group_cd: 10000,
          option_group_name: "옵션그룹명",
          options: [
            {
              option_cd: 10000,
              option_name: "옵션명",
              option_amount: 10000,
            },
            {
              option_cd: 5000,
              option_name: "옵션명2",
              option_amount: 5000,
            },
          ],
        },
      ],
      count: 2,
    },
    {
      menu_cd: 10000,
      menu_name: "메뉴명2",
      menu_price_cd: 10000,
      menu_price_name: "메뉴가격명",
      menu_price_amount: 8000,
      option_list: [
        {
          option_group_cd: 10000,
          option_group_name: "옵션그룹명",
          options: [
            {
              option_cd: 10000,
              option_name: "옵션명",
              option_amount: 2000,
            },
            {
              option_cd: 5000,
              option_name: "옵션명2",
              option_amount: 8000,
            },
          ],
        },
      ],
      count: 2,
    },
  ],
  pay_method: "바로결제(신용카드)",
  order_addr_doro: "서울시 금천구 벚꽃로 278",
  order_addr_jibun: "서울시 금천구 가산동 60",
  order_addr_detail: "SJ테크노빌 1205호",
  order_reqmsg: "가게요청사항입니다.",
  order_delivmsg: "배달요청사항입니다.",
  order_cancel_msg: "취소내용",
  order_dtime: "주문일시",
  order_accept_dtime: "접수일시",
  order_complete_dtime: "베달완료일시",
  order_cancel_dtime: "취소일시",
  order_tel: "고객전화번호",
  order_safetel: "안심번호사용여부(1:사용,0:사용안함)",
  order_safe_telno: "안심번호",
  order_predtime: "예상시간(분)",
  rem_minute: "남은시간(분)",
  order_disposable: "1회용품 미사용 내용",
  order_pickup_amount: 10000,
  shop_regular: 10000,
};
