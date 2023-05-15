import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li key={todo.id}>
      <span>{todo.title}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoListItem;
