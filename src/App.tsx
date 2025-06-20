import AccordionDemo from "./features/acccordion/AccordionDemo";
import ChipInputDemo from "./features/chipInput/ChipInputDemo";
import Todo from "./features/todos/Todo";
import "./App.css";
import ZigZagString from "./features/zigzagString/ZigZag";

export default function App() {
  return (
    <div className="App">
      <AccordionDemo />
      <Todo />
      <ChipInputDemo />
      <ZigZagString />
    </div>
  );
}
