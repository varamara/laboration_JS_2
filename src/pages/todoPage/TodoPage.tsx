import { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { Todo } from "../../types";

interface ITodoPage {
  userName: string;
}

const TodoPage: React.FC<ITodoPage> = ({ userName }) => {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <section className="todo-page">
        <h1>Här är din todo-lista {userName}</h1>
        <div className="todo-view">
         <TodoForm setTodos={setTodos} todos={todos}/>
         <TodoList todos={todos} />
        </div>
      </section>
    </>
  );
};

export default TodoPage;