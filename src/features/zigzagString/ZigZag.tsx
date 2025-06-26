import { useState } from "react";
import "./ZigZag.scss";

const ZigZagString = () => {
  const [zigzagVal, setZigzagVal] = useState<string>("");
  const [zigZagOutput, setZigZagOutput] = useState<string>("");
  const handleZigZag = () => {
    const inputArray = zigzagVal.split(",");
    const output = inputArray.map((item: string, index: number) => {
      if (index % 2 === 0) {
        return item;
      } else {
        return item.split("").reverse().join("");
      }
    });
    setZigZagOutput(output.join(""));
  };

  return (
    <div className="zigzag-wrapper">
      <h1>Zig Zag String</h1>
      <input
        type="text"
        value={zigzagVal}
        aria-label="zigzag-input-box"
        onChange={(e) => setZigzagVal(e.target.value)}
        placeholder="Enter string like one,two,three"
      />
      <button className="btn" type="button" onClick={() => handleZigZag()}>
        Submit
      </button>
      <div
        className="outputText"
        style={{ display: zigZagOutput ? "block" : "none" }}
      >
        Output: {zigZagOutput}
      </div>
    </div>
  );
};
export default ZigZagString;
