import React, { Fragment, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

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

  const removeTodo = (id) => {
    //checking the array
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    //remove from array
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // toggle between true and false
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <Fragment>
      <h1>Today's Tasks</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodos={completeTodo}
        removeTodo={removeTodo}
      />
    </Fragment>
  );
}

export default TodoList;
