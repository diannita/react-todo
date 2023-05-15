import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// Custom hook for semi-persistent state
function useSemiPersistentState(key) {
  const [state, setState] = React.useState(
    JSON.parse(localStorage.getItem(key)) || []
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App() {
  // Update to use custom hook useSemiPersistentState
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  function removeTodo(id) {
    const newTodoList = todoList.filter((todoItem) => id !== todoItem.id);
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      <hr />
    </>
  );
}

export default App;
