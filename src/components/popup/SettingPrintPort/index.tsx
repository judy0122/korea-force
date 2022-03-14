import { useState, useEffect } from "react";
import CommonPopup from "../CommonPopup";

export interface ISettingPrintPortProps {
  port: string;
  onClose: () => void;
  onConfirm: (name: string) => void;
}

export default function SettingPrintPortPopup({
  port,
  onClose,
  onConfirm,
}: ISettingPrintPortProps) {
  const [list, setList] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm(selected);
  };

  useEffect(() => {
    setSelected(port);
  }, [port]);

  useEffect(() => {
    setList(dummy);
  }, []);

  return (
    <CommonPopup onClose={onClose} title="연결포트 설정">
      <div className="con">
        <div className="pop_chk gray_box">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <div className="chk_list type3 radio">
                  <input
                    type="radio"
                    name="print_port"
                    id={`print_port_${item}`}
                    value={item}
                    checked={selected === item}
                    onChange={handleChangeName}
                  />
                  <label htmlFor={`print_port_${item}`}>{item}</label>
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

const dummy = ["OK30", "A7 MiniPrinter"];
