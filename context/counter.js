import { createContext, useContext, useState } from "react";

export function CounterProvider({ children }) {
  const [state, setState] = useState(initialValue);

  function increment() {
    setState({ ...state, count: state.count + 1 });
  }
  function decrement() {
    setState({ ...state, count: state.count - 1 });
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

const initialValue = { count: 0 };
const CounterContext = createContext(null);
