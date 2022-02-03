import React, { useState, useEffect, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: nanoid(),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <HStack direction="row" mt="4">
        <Input
          variant="filled"
          type="text"
          placeholder="Add todo..."
          value={input}
          id="text"
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <Button px="8" colorScheme="pink" className="todo-button" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default TodoForm;
