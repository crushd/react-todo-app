import React, { Fragment, useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  return (
    <Fragment>
      <h1>Today's Tasks</h1>
      <TodoForm onSubmit={addTodo} />
    </Fragment>
  );
}

export default TodoList;
