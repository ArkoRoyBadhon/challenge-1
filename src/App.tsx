// import './App.css'

import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterslice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="">Tech Net</div>
      <div className="mt-10 flex gap-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 bg-green-300"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 py-2 bg-green-300"
        >
          Increment By value
        </button>
        <div className="">{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 bg-red-300"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
