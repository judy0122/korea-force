export default function DeliverySetting() {
  return (
    <div>
      <div className="top_btn">
        <button className="layer_delivery_add openlayer btn ms blue">
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
            <tr>
              <td>젠들리</td>
              <td>1655</td>
              <td>사용중</td>
              <td>
                <button className="btn s default">삭제</button>
              </td>
            </tr>
            <tr>
              <td>젠들리</td>
              <td>1655</td>
              <td>사용중</td>
              <td>
                <button className="btn s default">삭제</button>
              </td>
            </tr>
            <tr>
              <td>젠들리</td>
              <td>1655</td>
              <td>사용중</td>
              <td>
                <button className="btn s default">삭제</button>
              </td>
            </tr>
            <tr>
              <td>젠들리</td>
              <td>1655</td>
              <td>사용중</td>
              <td>
                <button className="btn s default">삭제</button>
              </td>
            </tr>
            <tr>
              <td>젠들리</td>
              <td>1655</td>
              <td>사용중</td>
              <td>
                <button className="btn s default">삭제</button>
              </td>
            </tr>
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
