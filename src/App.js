import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const key = "savedTodoList";
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      console.log(response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      } else{
      const data = await response.json();
      console.log("Data:", data); // Print the API response data
      return data;
      }

    } catch (error) {
      console.log(error); // Log the error message for debugging
    }
  }

  React.useEffect(()=>{
    fetchData().then((data) => {
    const todos = data.records.map((item)=>{
      return {id:item.id, title:item.fields.title};
    })
    setTodoList(todos);
    console.log('Data ' + todos);
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
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
        </>} />
        
        {/* new Route for "/new" */}
        <Route path="/new" element={<h1>New Todo List</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
