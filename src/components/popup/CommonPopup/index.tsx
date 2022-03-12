export interface ICommonPopupProps {
  title: string;
  size?: "s" | "m" | "lg";
  onClose: () => void;
  children: React.ReactNode;
}

export default function CommonPopup({
  title,
  size = "s",
  children,
  onClose,
}: ICommonPopupProps) {
  return (
    <div className="layer active">
      <div className="dim"></div>
      <div className={`in size_${size}`}>
        <div className="tit_area">
          <strong>{title}</strong>
        </div>
        {children}
        <button className="close" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
