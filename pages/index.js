import { useCounter } from "../context/counter";

export default function Home() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <p>counter: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
