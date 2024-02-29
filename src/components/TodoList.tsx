
import React from "react";
import { Todo } from "../types";

interface ITodoList {
    todos: Todo[];
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
    return (
        <>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;