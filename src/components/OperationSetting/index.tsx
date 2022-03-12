import useOperationSetting from "./useOperationSetting";
import { useSettings } from "./values";

export default function OperationSetting() {
  const {
    isStart,
    version,
    isOrigin,
    widgetSetting,
    alarmSetting,
    blinkSetting,
    onToggleIsStart,
    onClickPcList,
    onClickDeliveryTime,
    onClickCookingTime,
    onToggleIsOrigin,
    onClickOriginSetting,
    onChangeWidgetSetting,
    onChangeAlarmSetting,
    onClickAlarmSetting,
    onChangeBlinkSetting,
    onClickUpdate,
  } = useOperationSetting();

  return (
    <div className="tb_type1 first">
      <table>
        <colgroup>
          <col style={{ width: "178px" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "178px" }} />
          <col style={{ width: "auto" }} />
        </colgroup>
        <tbody>
          <tr>
            <th>
              <i className="ico ico1"></i>프로그램 설정
            </th>
            <td>
              <div className="chk_wrap">
                <div className="chk_list type2">
                  <input
                    type="checkbox"
                    name="pc_play"
                    id="pc_play"
                    checked={isStart}
                    onChange={onToggleIsStart}
                  />
                  <label htmlFor="pc_play">PC 켤 때마다 자동실행</label>
                </div>
              </div>
            </td>
            <th>
              <i className="ico ico8"></i>버전정보
            </th>
            <td>
              <span className="txt">버전 {version} 최신 버전입니다.</span>
              <button
                className="layer_update openlayer btn s default f_r"
                onClick={onClickUpdate}
              >
                업데이트
              </button>
            </td>
          </tr>
          <tr>
            <th>
              <i className="ico ico2"></i>로그인 기기관리
            </th>
            <td>
              <button
                className="layer_login_manage openlayer btn s default"
                onClick={onClickPcList}
              >
                기기조회
              </button>
            </td>
            <th>
              <i className="ico ico9"></i>도움말
            </th>
            <td>
              <button className="btn s default">도움말 보기</button>
            </td>
          </tr>
          <tr>
            <th>
              <i className="ico ico3"></i>배달시간 설정
            </th>
            <td className="delivery_tb">
              <div>
                <span className="txt">조리 + 배달시간 설정</span>
                <button
                  className="layer_delivery_set openlayer btn s default"
                  onClick={onClickDeliveryTime}
                >
                  30분
                </button>
              </div>
              <div className="mt_10">
                <span className="txt">조리시간 설정</span>
                <button
                  className="layer_cooking_set openlayer btn s default"
                  onClick={onClickCookingTime}
                >
                  10분
                </button>
              </div>
            </td>
            <th className="bg_none"></th>
            <td></td>
          </tr>
          <tr>
            <th>
              <i className="ico ico4"></i>원산지 설정
            </th>
            <td>
              <div className="chk_wrap">
                <div className="chk_list type2">
                  <input
                    type="checkbox"
                    name="originChk"
                    id="originChk"
                    checked={isOrigin}
                    onChange={onToggleIsOrigin}
                  />
                  <label htmlFor="originChk">사용</label>
                </div>
              </div>
              <button
                className="layer_origin_cont openlayer btn s default f_r"
                onClick={onClickOriginSetting}
              >
                수정
              </button>
            </td>
            <th className="bg_none"></th>
            <td></td>
          </tr>
          <tr>
            <th>
              <i className="ico ico5"></i>위젯 관리
            </th>
            <td>
              <div className="chk_wrap">
                {useSettings.map(({ name, value }, index) => (
                  <div className="chk_list type2" key={index}>
                    <input
                      type="radio"
                      name="originChk"
                      id={`origin-${value}`}
                      value={value}
                      checked={widgetSetting === value}
                      onChange={onChangeWidgetSetting}
                    />
                    <label htmlFor={`origin-${value}`}>{name}</label>
                  </div>
                ))}
              </div>
            </td>
            <th className="bg_none"></th>
            <td></td>
          </tr>
          <tr>
            <th>
              <i className="ico ico6"></i>알림 설정
            </th>
            <td>
              <div className="chk_wrap">
                {useSettings.map(({ name, value }, index) => (
                  <div className="chk_list type2" key={index}>
                    <input
                      type="radio"
                      name="alarmChk"
                      id={`alarm-${value}`}
                      value={value}
                      checked={alarmSetting === value}
                      onChange={onChangeAlarmSetting}
                    />
                    <label htmlFor={`alarm-${value}`}>{name}</label>
                  </div>
                ))}
              </div>
              <button
                className="layer_notice_set openlayer btn s default f_r"
                onClick={onClickAlarmSetting}
              >
                설정
              </button>
            </td>
            <th className="bg_none"></th>
            <td></td>
          </tr>
          <tr>
            <th>
              <i className="ico ico7"></i>깜빡이 알림
            </th>
            <td>
              <div className="chk_wrap">
                {useSettings.map(({ name, value }, index) => (
                  <div className="chk_list type2" key={index}>
                    <input
                      type="radio"
                      name="blinkChk"
                      id={`blink-${value}`}
                      value={value}
                      checked={blinkSetting === value}
                      onChange={onChangeBlinkSetting}
                    />
                    <label htmlFor={`blink-${value}`}>{name}</label>
                  </div>
                ))}
              </div>
            </td>
            <th className="bg_none"></th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
