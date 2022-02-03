import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {
  Flex,
  Heading,
  HStack,
  List,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList() {
  const todoData = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get milk",
    },
  ];

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
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      <TodoForm onSubmit={addTodo} />
      {todoData.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound="true" />
        </HStack>
      ))}
      {/* <Flex justify="center" direction="column" w="100%">
        <Flex p="5">
          
        </Flex>
        <Flex>
          <List>
            <Todo
              todos={todos}
              completeTodos={completeTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          </List>
        </Flex>
      </Flex> */}
    </VStack>
  );
}

export default TodoList;
