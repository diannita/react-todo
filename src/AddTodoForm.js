import React from "react";
import InputWithLabel from "./InputWithLabel"; // Import the InputWithLabel component
import './styles.css';
import styles from './TodoListItem.module.css';

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
    <form onSubmit={handleAddTodo} className="add-todo-form">
      {/* Use InputWithLabel component and pass necessary props */}
      <InputWithLabel
        value={todoTitle}
        onChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button className={styles.button}>Add to List</button>
    </form>
  );
}

export default AddTodoForm;
