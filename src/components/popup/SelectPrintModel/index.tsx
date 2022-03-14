import { useEffect } from "react";
import { useState } from "react";
import CommonPopup from "../CommonPopup";

export interface ISelectPrintModelProps {
  name: string;
  onClose: () => void;
  onConfirm: (name: string) => void;
}

export function SelectPrintModelPopup({
  name,
  onClose,
  onConfirm,
}: ISelectPrintModelProps) {
  const [list, setList] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm(selected);
  };

  useEffect(() => {
    setSelected(name);
  }, [name]);

  useEffect(() => {
    setList(dummy);
  }, []);

  return (
    <CommonPopup title="모델선택" onClose={onClose}>
      <div className="con">
        <div className="pop_chk gray_box">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <div className="chk_list type3 radio">
                  <input
                    type="radio"
                    name="print_model"
                    id={`print_model_${item}`}
                    value={item}
                    checked={selected === item}
                    onChange={handleChangeName}
                  />
                  <label htmlFor={`print_model_${item}`}>{item}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="btn_area l">
          <a href="#;" className="btn m default close" onClick={onClose}>
            취소
          </a>
          <a href="#;" className="btn m gray" onClick={handleConfirm}>
            확인
          </a>

          <div className="arr_box">
            <a href="#;" className="arr_top">
              위로
            </a>
            <a href="#;" className="arr_bottom">
              아래
            </a>
          </div>
        </div>
      </div>
    </CommonPopup>
  );
}

const dummy = ["FP1100", "SMP-R30", "SMT-T224", "KS9050", "SRP352PLUSIII"];
