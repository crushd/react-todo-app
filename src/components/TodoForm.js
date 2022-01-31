import React, { useState, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Flex, Button } from "@chakra-ui/react";
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
    <Flex direction="row" w="100%">
      <FormControl className="todo-form" onSubmit={handleSubmit}>
        <FormLabel htmlFor="text" />
        <Input
          type="text"
          placeholder="Add todo..."
          value={input}
          id="text"
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <Button className="todo-button">Add</Button>
      </FormControl>
    </Flex>
  );
}

export default TodoForm;
