import ChangePrintNamePopup from "../popup/ChangePrintName";
import SettingPrintPortPopup from "../popup/SettingPrintPort";
import usePrintSetting from "./usePrintSetting";
import { SelectPrintModelPopup } from "../popup/SelectPrintModel";
import { printTypes } from "./values";
import ChangePrintSpeedPopup from "../popup/ChangePrintSpeed";

export default function PrintSettingPopup() {
  const {
    prints,
    name,
    selectedPrint,
    type,
    model,
    port,
    speed,
    isShowChangeName,
    isShowChangeModel,
    isShowChangePort,
    isShowChangeSpeed,
    onChangeSelectedPrint,
    onChangeName,
    onToggleIsShowChangeModel,
    onToggleIsShowChangePort,
    onToggleIsShowChangeName,
    onToggleIsShowChangeSpeed,
    onChangeType,
    onChangeModel,
    onChangePort,
    onChangeSpeed,
  } = usePrintSetting();
  return (
    <>
      <div>
        <div className="top_btn">
          <ul className="tab_type2">
            {prints.map((print, index) => (
              <li
                key={index}
                onClick={() => onChangeSelectedPrint(index)}
                className={
                  selectedPrint === index ? "btn ms blue" : "btn ms default"
                }
              >
                {print}
              </li>
            ))}
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
                {/* 프린트명 */}
                <th className="txt_c">프린트명</th>
                <td>
                  <span className="txt">{name}</span>
                  <button
                    className="btn s default f_r"
                    onClick={onToggleIsShowChangeName}
                  >
                    변경
                  </button>
                </td>
                {/* 모델명 */}
                <th className="txt_c">모델명</th>
                <td>
                  <span className="txt">{model}</span>
                  <button
                    className="layer_model_chk openlayer btn s default f_r"
                    onClick={onToggleIsShowChangeModel}
                  >
                    변경
                  </button>
                </td>
              </tr>

              <tr>
                {/* 프린터 타입 */}
                <th className="txt_c">프린터 타입</th>
                <td>
                  <div className="chk_wrap">
                    {printTypes.map(({ value, name }, index) => (
                      <div className="chk_list type2" key={index}>
                        <input
                          type="radio"
                          name="printType"
                          id={`printType-${value}`}
                          value={value}
                          checked={value === type}
                          onChange={onChangeType}
                        />
                        <label htmlFor={`printType-${value}`}>{name}</label>
                      </div>
                    ))}
                  </div>
                </td>
                {/* 연결포트 */}
                <th className="txt_c">연결포트</th>
                <td>
                  <span className="txt">{port}</span>
                  <button
                    className="btn s default f_r"
                    onClick={onToggleIsShowChangePort}
                  >
                    변경
                  </button>
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
                      <input
                        type="radio"
                        name="purposeType"
                        id="purposeType2"
                      />
                      <label htmlFor="purposeType2">주방용</label>
                    </div>
                  </div>
                </td>
                {/* 연결속도 */}
                <th className="txt_c">연결속도</th>
                <td>
                  <span className="txt">{speed}</span>
                  <button
                    className="btn s default f_r"
                    onClick={onToggleIsShowChangeSpeed}
                  >
                    변경
                  </button>
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
      {isShowChangeName && (
        <ChangePrintNamePopup
          name={name}
          onConfirm={onChangeName}
          onClose={onToggleIsShowChangeName}
        />
      )}
      {isShowChangeModel && (
        <SelectPrintModelPopup
          name={model}
          onClose={onToggleIsShowChangeModel}
          onConfirm={onChangeModel}
        />
      )}
      {isShowChangePort && (
        <SettingPrintPortPopup
          port={port}
          onClose={onToggleIsShowChangePort}
          onConfirm={onChangePort}
        />
      )}
      {isShowChangeSpeed && (
        <ChangePrintSpeedPopup
          speed={speed}
          onClose={onToggleIsShowChangeSpeed}
          onConfirm={onChangeSpeed}
        />
      )}
    </>
  );
}
