import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    // if you want to update the state based on a previous state you should use function form updating your state
    setTodos((prevTodos) => {
      // concat creates a new array
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (itemId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== itemId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
