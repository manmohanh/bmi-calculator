import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(80);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(()=>{
    const calHeight = height / 100;

    return (weight/(calHeight*calHeight)).toFixed(1)
  },[weight,height])

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight}kg</p>
        <input
          type="range"
          onChange={onWeightChange}
          className="input-slider"
          step="1"
          min="40"
          max="200"
        />

        <p className="slider-output">Height:{height}cm</p>
        <input
          type="range"
          className="input-slider"
          onChange={onHeightChange}
          min='120'
          max='240'
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
