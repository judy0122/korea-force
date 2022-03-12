export default function PrintSetting() {
  return (
    <div>
      <div className="top_btn">
        <ul className="tab_type2">
          <li className="btn ms blue">영수1</li>
          <li className="btn ms default">영수2</li>
          <li className="btn ms default">영수3</li>
        </ul>
        <button className="btn ms blue f_r">
          <span className="plus">프린터 추가</span>
        </button>
      </div>
      <div className="tb_type1 h60">
        <table>
          <colgroup>
            <col style={{ width: "16%" }} />
            <col style={{ width: "38%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <tbody>
            <tr>
              <th className="txt_c">프린트명</th>
              <td>
                <span className="txt">영수1</span>
                <button className="btn s default f_r">변경</button>
              </td>
              <th className="txt_c">모델명</th>
              <td>
                <span className="txt">YM-YO1234</span>
                <button className="layer_model_chk openlayer btn s default f_r">
                  변경
                </button>
              </td>
            </tr>
            <tr>
              <th className="txt_c">프린터 타입</th>
              <td>
                <div className="chk_wrap">
                  <div className="chk_list type2">
                    <input
                      type="radio"
                      name="printType"
                      id="printType1"
                      checked
                    />
                    <label htmlFor="printType1">시리얼</label>
                  </div>
                  <div className="chk_list type2">
                    <input
                      type="radio"
                      name="printType"
                      id="printType2"
                      checked
                    />
                    <label htmlFor="printType2">네트워크</label>
                  </div>
                </div>
              </td>
              <th className="txt_c">연결포트</th>
              <td>
                <span className="txt">COM3</span>
                <button className="btn s default f_r">변경</button>
              </td>
            </tr>
            <tr>
              <th className="txt_c">용도</th>
              <td>
                <div className="chk_wrap purposeTypeChk">
                  <div className="chk_list type2">
                    <input
                      type="radio"
                      name="purposeType"
                      id="purposeType1"
                      checked
                    />
                    <label htmlFor="purposeType1">영수증</label>
                  </div>
                  <div className="chk_list type2">
                    <input type="radio" name="purposeType" id="purposeType2" />
                    <label htmlFor="purposeType2">주방용</label>
                  </div>
                </div>
              </td>
              <th className="txt_c">연결속도</th>
              <td>
                <span className="txt">YM-YO1234</span>
                <button className="btn s default f_r">변경</button>
              </td>
            </tr>
            <tr className="kitchen_tr">
              <th className="txt_c">주방프린터</th>
              <td>
                <span className="txt">주방프린터1</span>
              </td>
              <th className="bg_none"></th>
              <td></td>
            </tr>
            <tr className="none">
              <th className="txt_c">출력장수</th>
              <td colSpan={3}>
                <ul className="pint_page_chk">
                  <li>
                    <span className="txt">배달</span>
                    <div className="chk_list type2">
                      <input
                        type="checkbox"
                        name="pint_page_chk1"
                        id="pint_page_chk1"
                        checked
                      />
                      <label htmlFor="pint_page_chk1">출력</label>
                    </div>
                    <div className="print_increase">
                      <button className="btn s default minus">
                        <span>감소</span>
                      </button>
                      <input type="text" name="" id="" value="1" />
                      <button className="btn s default plus">
                        <span>증가</span>
                      </button>
                    </div>
                  </li>
                  <li>
                    <span className="txt">포장</span>
                    <div className="chk_list type2">
                      <input
                        type="checkbox"
                        name="takeout1"
                        id="takeout1"
                        checked
                      />
                      <label htmlFor="takeout1">출력</label>
                    </div>
                    <div className="print_increase">
                      <button className="btn s default minus">
                        <span>감소</span>
                      </button>
                      <input type="text" name="" id="" value="1" />
                      <button className="btn s default plus">
                        <span>증가</span>
                      </button>
                    </div>
                  </li>
                  <li>
                    <span className="txt">테이블오더</span>
                    <div className="chk_list type2">
                      <input
                        type="checkbox"
                        name="tableorder1"
                        id="tableorder1"
                        checked
                      />
                      <label htmlFor="tableorder1">출력</label>
                    </div>
                    <div className="print_increase">
                      <button className="btn s default minus">
                        <span>감소</span>
                      </button>
                      <input type="text" name="" id="" value="1" />
                      <button className="btn s default plus">
                        <span>증가</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="btn_area c">
          <button className="btn m gray">저장</button>
          <button className="btn m default">삭제</button>
          <button className="btn m default">테스트출력</button>
        </div>
      </div>
    </div>
  );
}
