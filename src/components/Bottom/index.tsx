import BottomButtons from "../BottomButtons";
import useBottom from "./useBottom";

export default function Bottom() {
  const { list, order, selectedOrder, subTabIndex, onChangeSelectedOrder } =
    useBottom();
  return (
    <>
      <div className="bottom_controll">
        <div className="left">
          <div className="page btn">
            <p>
              <strong>{selectedOrder ? selectedOrder + 1 : 0}</strong>/
              <span>{list.length}</span>
            </p>
          </div>
          <div className="arr_controll">
            <button
              disabled={selectedOrder === 0 || !order}
              className="btn ms default"
              onClick={() => onChangeSelectedOrder(selectedOrder - 1)}
            >
              <span className="arr_top">위로</span>
            </button>
            <button
              className="btn ms default"
              disabled={selectedOrder === list.length - 1 || !order}
              onClick={() => onChangeSelectedOrder(selectedOrder + 1)}
            >
              <span className="arr_bottom">아래로</span>
            </button>
          </div>
        </div>

        <div className="right">
          <BottomButtons />
          <div className="arr_controll">
            {subTabIndex === 0 && (
              <button className="btn ms default">
                <span className="print">프린트</span>
              </button>
            )}
            <button className="btn ms default">
              <span className="arr_top">위로</span>
            </button>
            <button className="btn ms default">
              <span className="arr_bottom">아래로</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
