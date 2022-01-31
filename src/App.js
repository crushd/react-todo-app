import { Flex, Link, Box } from "@chakra-ui/react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Flex p="5" direction="column" w="100%" justify="center">
      <TodoList />
      <Box pt="5">
        <Link href="https://github.com/crushd/react-todo-app">
          https://github.com/crushd/react-todo-app
        </Link>
      </Box>
    </Flex>
  );
}

export default App;
