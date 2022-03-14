import useDeliverySetting from "./useDeliverySetting";

export default function DeliverySetting() {
  const { list, onClickDelete, onClickAdd } = useDeliverySetting();

  return (
    <div>
      <div className="top_btn">
        <button
          className="layer_delivery_add openlayer btn ms blue"
          onClick={onClickAdd}
        >
          <span className="plus">배달대행사 추가</span>
        </button>
      </div>
      <div className="tb_type1 c">
        <table>
          <colgroup>
            <col style={{ width: "25%" }} span={4} />
          </colgroup>
          <thead>
            <tr>
              <th>배달대행사</th>
              <th>연동코드</th>
              <th>사용여부</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.delivery_comp_nm}</td>
                <td>{item.delivery_shop_cd}</td>
                <td>사용중</td>
                <td>
                  <button
                    className="btn s default"
                    onClick={() => onClickDelete(item)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="arr_controll">
        <button className="btn ms default">
          <span className="arr_top">위로</span>
        </button>
        <button className="btn ms default">
          <span className="arr_bottom">아래로</span>
        </button>
      </div>
    </div>
  );
}
