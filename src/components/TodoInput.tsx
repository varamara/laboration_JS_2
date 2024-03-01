import React, { ChangeEvent, useState } from "react";
import { TodoType } from "../types";

interface ITodoInput {
  setTodos: (todos: TodoType[]) => void;
  todos: TodoType[];
}

const TodoInput: React.FC<ITodoInput> = ({ setTodos, todos }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState<string>("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setTodoInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: TodoType = {
      id: Math.random(),
      text: todoInputValue,
    };

    const newTodos: TodoType[] = [...todos, newTodo];

    setTodos(newTodos);

    setTodoInputValue("");
    setIsSubmitted(true);
    console.log("newTodos", newTodos);
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skriv in en todo"
          value={todoInputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Lägg till</button>
      </form>
      {isSubmitted && <p>en todo har lagts till!</p>}
    </>
  );
};

export default TodoInput;
