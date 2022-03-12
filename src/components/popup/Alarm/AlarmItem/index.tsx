import { useState } from "react";
import { alarmTypes } from "../../values";

export interface IAlarmItemProps {
  type: string;
  name: string;
  checked: string;
  volumn: string;
  onChange: (type: string, value: string) => void;
  onChangeVolumn: (type: string, value: string) => void;
}

export default function AlarmItem({
  name,
  type,
  checked,
  volumn,
  onChange,
  onChangeVolumn,
}: IAlarmItemProps) {
  const [isVolumnSetting, setIsVolumnSetting] = useState<boolean>(false);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type, e.target.value);
  };
  const handleChangeVolumn = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeVolumn(type, e.target.value);
  };

  const onToggleIsVolumnSetting = () => {
    setIsVolumnSetting((prev) => !prev);
  };

  return (
    <>
      <li>
        <strong>{name}</strong>
        {alarmTypes.map(({ name, value }, index) => (
          <div className="chk_list type2" key={index}>
            <input
              type="radio"
              name={`${type}Chk`}
              id={`${type}-${value}`}
              value={value}
              checked={checked === value}
              onChange={handleChangeValue}
            />
            <label htmlFor={`${type}-${value}`}>{name}</label>
          </div>
        ))}
        <a href="#;" className="btn_sound" onClick={onToggleIsVolumnSetting}>
          소리
        </a>
      </li>
      {isVolumnSetting && (
        <li className="mt_15 mb_25">
          <div className="rangeSlide">
            <input
              type="range"
              min="0"
              max="100"
              value={volumn}
              data-rangeslider
              onChange={handleChangeVolumn}
            />
            <div className="count">
              <output>{volumn}</output>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
