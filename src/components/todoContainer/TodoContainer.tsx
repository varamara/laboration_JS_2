import { TodoType } from "../../types";
import Todo from "./todo/Todo";
import TodoInput from "./todoInput/TodoInput";
import "./todo-container.scss";

interface ITodoContainer {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
}

const TodoContainer: React.FC<ITodoContainer> = ({ todos, setTodos }) => {
  return (
    <>
      <section className="todo-container">
        <TodoInput todos={todos} setTodos={setTodos} />
        <Todo todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
};

export default TodoContainer;
