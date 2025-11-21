import { useState } from "react";

export function Cricket() {
  const counterStyle = {
    border: "5px solid blue",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
  const [run, setRun] = useState(0);
  const singleHandelar = () => {
    const newRun = run + 1;
    setRun(newRun);
  };
  const doubleHandelar = () => {
    const newRun = run + 2;
    setRun(newRun);
  };
  const threeHandelar = () => {
    const newRun = run + 3;
    setRun(newRun);
  };
  const fourHandelar = () => {
    const newRun = run + 4;
    setRun(newRun);
    setFour(fours + 1);
  };
  const sixHandelar = () => {
    const newRun = run + 6;
    setRun(newRun);
    setSixes(sixs + 1);
  };
  const wideHandelar = () => {
    const newRun = run + 1;
    setRun(newRun);
  };
  const [sixs, setSixes] = useState(0);
  const [fours, setFour] = useState(0);

  return (
    <div style={counterStyle}>
      <h1>Cricket</h1>
      <h2>Run:{run}</h2>
      {<h2>six:{sixs}</h2>}
      {<h2>Fours:{fours}</h2>}
      {run >= 50 && <p>Your Score:50</p>}
      <button onClick={singleHandelar}>Single Run</button>
      <button onClick={doubleHandelar}>Double Run</button>
      <button onClick={threeHandelar}>Three Run</button>
      <button onClick={fourHandelar}>Four Run</button>
      <button onClick={sixHandelar}>Six Run</button>
      <button onClick={wideHandelar}>Wide</button>
    </div>
  );
}
