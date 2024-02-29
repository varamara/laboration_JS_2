import React, { ChangeEvent, useState } from "react";
import { Todo } from "../types";

interface ITodoForm {
  setTodos: (todos: Todo[]) => void;
  todos: Todo[];
}

const TodoForm: React.FC<ITodoForm> = ({ setTodos, todos }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState<string>("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setTodoInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: Math.random(),
      text: todoInputValue,
    };

    const newTodos: Todo[] = [...todos, newTodo];

    setTodos(newTodos);

    setTodoInputValue("");
    setIsSubmitted(true);
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

export default TodoForm;
