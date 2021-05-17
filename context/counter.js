import { createContext, useContext, useReducer } from "react";

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialValue);

  function increment() {
    dispatch("increment");
  }
  function decrement() {
    dispatch("decrement");
  }

  return (
    <CounterContext.Provider
      value={{
        ...state,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => useContext(CounterContext);

function counterReducer(state, action) {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

const initialValue = { count: 0 };
const CounterContext = createContext(null);
