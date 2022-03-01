import constate from "constate";

function useLeft() {
  return {};
}

const [LeftProvider] = constate(useLeft);

export { LeftProvider };
