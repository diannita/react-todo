import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// Custom hook for semi-persistent state
function useSemiPersistentState(key, initialState) {
  const [state, setState] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

function App() {
  // Update to use custom hook useSemiPersistentState
  const [todoList, setTodoList] = useSemiPersistentState(
    "savedTodoList",
    JSON.stringify([])
  );

  const addTodo = (newTodo) => {
    setTodoList(JSON.stringify([...JSON.parse(todoList), newTodo]));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      <TodoList todoList={JSON.parse(todoList)} />
      <hr />
    </div>
  );
}

export default App;
