import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Flex, Heading } from "@chakra-ui/react";

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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
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
    <Flex justify="center" direction="column" maxW="960px">
      <Heading>Today's Tasks</Heading>
      <Flex p="5">
        <TodoForm onSubmit={addTodo} />
      </Flex>
      <Flex>
        <Todo
          todos={todos}
          completeTodos={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Flex>
    </Flex>
  );
}

export default TodoList;
