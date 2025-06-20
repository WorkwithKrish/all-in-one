import { useEffect, useState } from "react";
import "./Todo.css";
import { mockTodoList } from "../../mocks/TodoMock/todoList.mock";
import { formatTime } from "../../utils/date/formatDate";

type Todo = {
  id: number;
  title: string;
  time: number;
  isRunning: boolean;
};

export default function Todo() {
  const [todoList, setTodoList] = useState<Todo[]>(mockTodoList);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const timeUpdate = (todo: Todo): Todo => {
      if (todo.isRunning) return { ...todo, time: (todo.time || 0) + 1 };
      return todo;
    };
    const timerInterval = setInterval(() => {
      setTodoList((prevList: Todo[]): Todo[] => prevList.map(timeUpdate));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const addTodo = () => {
    if (!title) {
      return;
    }
    setTodoList([
      ...todoList,
      {
        title: title,
        time: 0,
        isRunning: false,
        id: todoList.length + Math.random(),
      },
    ]);
    setTitle("");
  };

  const updateTimer = (id: number) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, isRunning: true } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    const updatedTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodo);
  };
  const resetTimer = (id: number) => {
    setTodoList((previousList) =>
      previousList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isRunning: false, time: 0 };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo">
      <h1>Todo Items</h1>
      <section className="todoForm">
        <input
          className="todoInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => addTodo()} disabled={title.trim().length === 0}>
          Add
        </button>
      </section>
      <section className={"todoList"}>
        {todoList.length ? (
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id} data-testid="todo-item">
                <span>{todo.title}</span>
                <div className="timer">{formatTime(todo.time)}</div>
                <button
                  onClick={() => {
                    updateTimer(todo.id);
                  }}
                >
                  {todo.isRunning ? "Pause" : "Start"}
                </button>
                <button onClick={() => resetTimer(todo.id)}>Reset</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="todo-placeholder">Nothing in todo</div>
        )}
      </section>
    </div>
  );
}
