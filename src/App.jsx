import { useReducer } from "react";

const App = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    console.log(action);

    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-xl bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded">
        <div className="bg-white rounded-md p-10">
          <h1 className="text-2xl text-center mb-5">{state}</h1>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}
              className="py-2 px-3 bg-purple-200 rounded-md"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}
              className="py-2 px-3 bg-cyan-200 rounded-md"
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
