import React, { useState } from "react";
import "./ChipInput.css";

export default function App() {
  const [currentValue, setCurrentValue] = useState<string>("");
  const [chipValues, setChipValues] = useState<string[]>([]);
  const onChipEnter = (e: React.KeyboardEvent) => {
    if (e.key == "Enter" && currentValue.trim() !== "") {
      setChipValues((prev) => [...prev, currentValue]);
      setCurrentValue("");
    }
  };

  const removeItem = (id: number) => {
    setChipValues((prev: string[]) => prev.filter((_, index) => id !== index));
  };
  return (
    <div className="ChipInput">
      <h1>Chip Input</h1>
      <input
        type="text"
        id="chip-input"
        aria-label="chip input"
        value={currentValue}
        onKeyDown={(e) => onChipEnter(e)}
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder="Type a chip and press tag"
      />
      <div className="chip-wrapper">
        {chipValues.map((value, index) => (
          <div key={value + index}>
            {value} <button onClick={() => removeItem(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
