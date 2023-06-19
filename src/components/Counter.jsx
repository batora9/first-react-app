import { useState } from "react";
import App from "../App";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default Counter