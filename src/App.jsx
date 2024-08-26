import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

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
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">100</p>
      </div>
    </main>
  );
}

export default App;
