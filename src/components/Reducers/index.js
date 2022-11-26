import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Reducers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <div>
        <button>
          <Link to={`/`}>Next State</Link>
        </button>
        <button>
          <Link to={`/effect`}>Next Effect</Link>
        </button>
      </div>
    </>
  );
};

export default Reducers;
