import React, { useState } from "react";

import styles from "./App.module.css";
import ColorPanel from "./component/ColorPanel";

const App: React.FC = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(1);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numberValue = parseFloat(value);
    if (name === "red") setRed(numberValue);
    if (name === "green") setGreen(numberValue);
    if (name === "blue") setBlue(numberValue);
    if (name === "alpha") setAlpha(numberValue);
  };

  return (
    <div className={styles.app}>
      <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
      <div className={styles.controls}>
        <label>
          Red
          <input
            type="range"
            name="red"
            min="0"
            max="255"
            step="1"
            value={red}
            onChange={handleRangeChange}
            data-cy="input-red"
          />
          <span data-cy="value-red">{red}</span>
        </label>
        <label>
          Green
          <input
            type="range"
            name="green"
            min="0"
            max="255"
            step="1"
            value={green}
            onChange={handleRangeChange}
            data-cy="input-green"
          />
          <span data-cy="value-green">{green}</span>
        </label>
        <label>
          Blue
          <input
            type="range"
            name="blue"
            min="0"
            max="255"
            step="1"
            value={blue}
            onChange={handleRangeChange}
            data-cy="input-blue"
          />
          <span data-cy="value-blue">{blue}</span>
        </label>
        <label>
          Alpha
          <input
            type="range"
            name="alpha"
            min="0"
            max="1"
            step="0.1"
            value={alpha}
            onChange={handleRangeChange}
            data-cy="input-alpha"
          />
          <span data-cy="value-alpha">{alpha}</span>
        </label>
      </div>
    </div>
  );
};

export default App;
