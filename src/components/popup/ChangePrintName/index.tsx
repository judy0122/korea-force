import { useEffect } from "react";
import { useState } from "react";
import CommonPopup from "../CommonPopup";

type ChangePrintNamePopupProps = {
  name: string;
  onConfirm: (name: string) => void;
  onClose: () => void;
};

export default function ChangePrintNamePopup({
  name,
  onClose,
  onConfirm,
}: ChangePrintNamePopupProps) {
  const [newName, setNewName] = useState<string>("");

  useEffect(() => {
    setNewName(name);
  }, [name]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleClickSave = () => {
    onConfirm(newName);
  };

  return (
    <CommonPopup title="프린터 이름변경" onClose={onClose}>
      <div className="con">
        <p className="txt s">변경할 프린터 이름을 입력해주세요.</p>

        <div className="choice_list">
          <input
            type="text"
            name=""
            id=""
            className="input gray"
            placeholder=""
            value={newName}
            onChange={onChangeValue}
          />
        </div>

        <div className="btn_area">
          <a href="#;" className="btn m default close" onClick={onClose}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={handleClickSave}>
            저장
          </a>
        </div>
      </div>
    </CommonPopup>
  );
}
