import { useState } from "react";
import CommonPopup from "../CommonPopup";
import useModifyMsg from "./useModifyMsg";

interface ModifyMsgPopupProps {
  requestmsg?: string;
  deliverymsg?: string;
  msg?: string;
  onClose: () => void;
}

export default function ModifyMsgPopup({
  requestmsg,
  deliverymsg,
  msg,
  onClose,
}: ModifyMsgPopupProps) {
  const [newMsg, setNewMsg] = useState<string>(msg || "");

  const { onToggleIsShow, onModifyMsg } = useModifyMsg();

  const handleChangeNewMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMsg(e.target.value);
  };

  const handleModifyMsg = () => {
    onModifyMsg(newMsg);
    onClose();
  };

  return (
    <CommonPopup title="요청사항 수정" onClose={onToggleIsShow}>
      <div className="con">
        <dl className="tit_con_style">
          <dt>고객요청</dt>
          <dd>
            <textarea
              disabled
              name="requestMsg"
              id="requestMsg"
              value={requestmsg}
            />
          </dd>
          <dt>배달기사님 요청</dt>
          <dd>
            <textarea
              disabled
              name="deliveryMsg"
              id="deliveryMsg"
              value={deliverymsg}
            />
          </dd>
          <dt>추가 요청</dt>
          <dd>
            <textarea
              name="newMsg"
              id="newMsg"
              value={newMsg}
              onChange={handleChangeNewMsg}
            ></textarea>
          </dd>
        </dl>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onClose}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={handleModifyMsg}>
            저장
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
