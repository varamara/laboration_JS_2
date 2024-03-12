import { useState } from "react";
import { TodoType } from "../../types";
import TodoContainer from "../../components/todoContainer/TodoContainer";

interface ITodoPage {
  userName: string;
}

const TodoPage: React.FC<ITodoPage> = ({ userName }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <>
      <section className="todo-page">
        <h1>Här är din todo-lista {userName}</h1>
        <TodoContainer todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
};

export default TodoPage;
