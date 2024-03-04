import React from "react";
import { TodoType } from "../../../types";
import "./todo.scss";
import trash from "../../../assets/trash.png";

interface ITodo {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
}

const Todo: React.FC<ITodo> = ({ todos, setTodos }) => {
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function toggleTodo(id: number): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => toggleTodo(todo.id)}
            />
            <button onClick={() => removeTodo(todo.id)}>
              <img src={trash} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
