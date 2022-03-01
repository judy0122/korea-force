export interface NewOrderProps {}

export default function NewOrder(props: NewOrderProps) {
  return (
    <div className="notice_layer active">
      <div className="top">
        <strong>
          신규주문 <span>1</span>
        </strong>
      </div>

      <div className="order_info_layer">
        <div>
          <div className="tit">
            <strong>배달 0002</strong>
            <span className="ico style1">배민</span>
            <em>독산동</em>
          </div>
          <div className="cont">
            <strong>메뉴 3개 · 총 32,000원(결제완료)</strong>
            <p>
              김치찌개(돼지고기추가,공기밥) 1개, 깍두기 볶음밥(차돌박이 추가)
              2개
            </p>
          </div>
          <div className="controlls">
            <button className="layer_order_refusal openlayer btn ms default length4">
              주문거절
            </button>
            <button className="btn ms default minus">
              <span>감소</span>
            </button>
            <input type="text" name="" id="" value="20분" readOnly />
            <button className="btn ms default plus ">
              <span>증가</span>
            </button>
            <button className="btn ms blue length4">주문접수</button>
          </div>
        </div>
      </div>

      <button className="close">닫기</button>
    </div>
  );
}
