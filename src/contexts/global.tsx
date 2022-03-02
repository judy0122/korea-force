/**
 * Returns the sum of a and b
 * @param {}
 */
import React, { createContext, Dispatch, useReducer, useContext } from "react";

//type

export type InitialStateTypes = {
  user: any;
  isLogin: boolean;
};

type StateName = "user" | "isLogin";

type UserTypes = {
  id: string | number;
  name: string | number;
};

type Action =
  | { type: "CHANGE"; name: StateName; value: any }
  | { type: "USER_LOGIN"; value: { user: UserTypes; isLogin: boolean } };

type GlobalDispatch = Dispatch<Action>;

type Provider = {
  children: React.ReactNode;
};

const initialState = {
  user: undefined,
  isLogin: false,
};

function globalReducer(
  state: InitialStateTypes,
  action: Action
): InitialStateTypes {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "USER_LOGIN":
      return {
        ...state,
        user: action.value.user,
        isLogin: action.value.isLogin,
      };
    default:
      return { ...state };
  }
}

//context
const stateContext = createContext<any | undefined>(undefined);
const dispatchContext = createContext<GlobalDispatch | undefined>(undefined);

// Provider
export function GlobalContextProvider({ children }: Provider) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  );
}

// useState
export function useGlobalState() {
  const state: InitialStateTypes = useContext(stateContext);
  if (!state) {
    throw new Error("useGlobalState not found");
  }
  return state;
}

// useDispatch
export function useGlobalDispatch() {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) {
    throw new Error("useGlobalDispatch not found");
  }
  return dispatch;
}
