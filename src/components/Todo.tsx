import React from "react";
import { TodoType } from "../types";

interface ITodo {
  todos: TodoType[];
}

const Todo: React.FC<ITodo> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
