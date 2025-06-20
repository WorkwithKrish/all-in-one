import { useState } from "react";

const ZigZagString = () => {
  const [zigzagVal, setZigZagVal] = useState<string>("");
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
      <input
        type="text"
        value={zigzagVal}
        aria-label="zigzag-input-box"
        onChange={(e) => setZigZagVal(e.target.value)}
        placeholder="Enter string like one,two,three"
      />
      <button type="button" onClick={() => handleZigZag()}>
        Submit
      </button>
      <div>Output: {zigZagOutput}</div>
    </div>
  );
};
export default ZigZagString;
