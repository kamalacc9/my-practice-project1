import "./App.css";
import Counter from "./Counter";
import { Cricket } from "./Cricket";

function App() {
  function ClickHandler() {
    alert("Button Clicked");
  }
  const ChlickHndler2 = () => {
    alert("button Clicked2");
  };
  return (
    <>
      <h1>React Core Concept</h1>
      <Cricket></Cricket>
      <button onClick={ClickHandler}>Click Me</button>
      <button onClick={ChlickHndler2}>Click Me2</button>
      <Counter></Counter>
    </>
  );
}

export default App;
