import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import { Cricket } from "./Cricket";
import { Users } from "./User";
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

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
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Cricket></Cricket>
      <button onClick={ClickHandler}>Click Me</button>
      <button onClick={ChlickHndler2}>Click Me2</button>
      <Counter></Counter>
    </>
  );
}

export default App;
