import AccordionDemo from "./features/acccordion/AccordionDemo";
import ChipInputDemo from "./features/chipInput/ChipInputDemo";
import Todo from "./features/todos/Todo";
import "./App.scss";
import ZigZagString from "./features/zigzagString/ZigZag";
import Header from "./components/header/Header";
import Counter from "./features/counter/Counter";
import UserForm from "./features/userForm/User";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AccordionDemo />
      <Todo />
      <ChipInputDemo />
      <ZigZagString />
      <Counter />
      <UserForm />
    </div>
  );
}
