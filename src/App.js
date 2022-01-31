import { Flex } from "@chakra-ui/react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Flex p="5" direction="column" w="100%" justify="center">
      <TodoList />
    </Flex>
  );
}

export default App;
