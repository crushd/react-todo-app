import React, { useState, useEffect } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content) {
      toast({
        title: "Your todo can't be blank",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  };

  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack m="8" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}>
        <Input
          variant="filled"
          placeholder="Add todo..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
