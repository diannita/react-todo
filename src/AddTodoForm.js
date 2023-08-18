import React from "react";
import InputWithLabel from "./InputWithLabel"; // Import the InputWithLabel component

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddTodo(newTodo);
    setTodoTitle("");
  };

  

  return (
    <form onSubmit={handleAddTodo}>
      {/* Use InputWithLabel component and pass necessary props */}
      <InputWithLabel
        label="Title" // Pass the label prop with value "Title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
