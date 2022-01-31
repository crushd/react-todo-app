import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Box, ListItem, Stack, Flex } from "@chakra-ui/react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <ListItem key={todo.id}>
      <Box>
        <Stack direction="row">
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <Flex direction="row">
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
            </Flex>
          </div>
        </Stack>
      </Box>
    </ListItem>
  ));
}

export default Todo;
