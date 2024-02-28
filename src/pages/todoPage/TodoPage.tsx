import React from "react";

interface ITodoPage {
  userName: string;
}

const TodoPage: React.FC<ITodoPage> = ({ userName }) => {
  return (
    <>
      <section className="todo-page">
        <h1>Här är din todo-lista {userName}</h1>
      </section>
    </>
  );
};

export default TodoPage;