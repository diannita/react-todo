import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const key = "savedTodoList";
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem(key)) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      const { todoList } = result.data;
      setTodoList(todoList);
      setIsLoading(false);
    });
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(key, JSON.stringify(todoList));
    }
  }, [key, todoList, isLoading]);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AddTodoForm onAddTodo={addTodo} />
          <hr />
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          <hr />
        </>
      )}
    </>
  );
}

export default App;
