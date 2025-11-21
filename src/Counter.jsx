import { useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "5px solid green",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div style={counterStyle}>
      <h2>Count:{count}</h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
