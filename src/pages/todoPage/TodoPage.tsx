import { useState } from "react";
import { TodoType } from "../../types";
import TodoInput from "../../components/TodoInput";
import Todo from "../../components/Todo";

interface ITodoPage {
  userName: string;
}

const TodoPage: React.FC<ITodoPage> = ({ userName }) => {
  
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <>
      <section className="todo-page">
        <h1>Här är din todo-lista {userName}</h1>
        <div className="todo-view">
         <TodoInput setTodos={setTodos} todos={todos}/>
         <Todo todos={todos} />
        </div>
      </section>
    </>
  );
};

export default TodoPage;