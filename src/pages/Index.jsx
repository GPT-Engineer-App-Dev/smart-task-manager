import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, List, ListItem, Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue, isCompleted: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading>Todo App</Heading>
        <HStack width="100%">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new todo"
            size="md"
          />
          <Button onClick={handleAddTodo} colorScheme="blue">
            Add
          </Button>
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo) => (
            <ListItem key={todo.id} p={2} bg="gray.100" borderRadius="md">
              <HStack justifyContent="space-between">
                <Checkbox
                  isChecked={todo.isCompleted}
                  onChange={() => handleToggleTodo(todo.id)}
                >
                  <Text as={todo.isCompleted ? "s" : "span"}>{todo.text}</Text>
                </Checkbox>
                <IconButton
                  aria-label="Delete todo"
                  icon={<FaTrash />}
                  onClick={() => handleDeleteTodo(todo.id)}
                  size="sm"
                  colorScheme="red"
                />
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;