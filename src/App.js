import { Heading, Flex, Link, Box, VStack, IconButton } from "@chakra-ui/react";
import { Fragment } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading mb="8" fontWeight="extrabold" size="2xl">
        Todo Application
      </Heading>
      <TodoList />
      <Box pt="5">
        <Link href="https://github.com/crushd/react-todo-app">
          https://github.com/crushd/react-todo-app
        </Link>
      </Box>
    </VStack>
  );
}

export default App;
