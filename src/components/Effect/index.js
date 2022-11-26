import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = "Hello, " + name;
    console.log(name);
  }, []);
  useEffect(() => {
    document.title = "Hello, " + name;
    console.log(name);
  });
  useEffect(() => {
    document.title = "Hello, " + name;
    console.log(name);
  }, [name]);
  console.log(counter);

  return (
    <>
      <h1 className="Greeting">
        Hello, {name}
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCounter(counter + 1)}>Click</button>
      </h1>
      <button>
        <Link to={`/`}>Next State</Link>
      </button>
      <button>
        <Link to={`/reducers`}>Next Reducers</Link>
      </button>
    </>
  );
};

export default Effect;
