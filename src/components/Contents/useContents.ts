import { useSelector } from "react-redux";
import { RootState } from "src/store";

export default function useContents() {
  const { tabType } = useSelector((state: RootState) => state.tab);

  return { tabType };
}
