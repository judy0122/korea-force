import CommonPopup from "../CommonPopup";
import usePcList from "./usePcList";

export default function PcList() {
  const {
    list,
    modifyCode,
    modifyName,
    onToggleIsShow,
    onClickModify,
    deletePc,
    modifyPc,
    onChangeModifyName,
  } = usePcList();
  return (
    <CommonPopup title="로그인 기기관리" onClose={onToggleIsShow}>
      <div className="con">
        <div className="manage_list">
          <ul>
            {list.map(({ conn_type, device_code, device_name }, index) => (
              <li
                key={index}
                className={modifyCode === device_code ? "modify" : ""}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  value={modifyCode !== device_code ? device_name : modifyName}
                  onChange={onChangeModifyName}
                  readOnly={modifyCode !== device_code}
                />
                <div className="btn_area">
                  {modifyCode === device_code ? (
                    <button className="btn s default modify" onClick={modifyPc}>
                      수정
                    </button>
                  ) : (
                    <button
                      className="btn s default"
                      onClick={() => onClickModify(device_code, device_name)}
                    >
                      이름변경
                    </button>
                  )}
                  <button
                    className="btn s default"
                    onClick={() => deletePc(device_code)}
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
            {/* <li className="now">
              <input
                type="text"
                name=""
                id=""
                className="input"
                value="DESKTOP-CKG09"
                readOnly
              />
              <em>현재 로그인한 기기입니다.</em>
              <div className="btn_area">
                <button className="btn s default">이름변경</button>
                <button className="btn s default">삭제</button>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onToggleIsShow}>
            닫기
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
