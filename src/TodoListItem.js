import React from "react";
import './styles.css';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li key={todo.id} className="todo-item">
      <span>{todo.title}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoListItem;
