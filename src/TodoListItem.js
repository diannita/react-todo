import React from "react";

function TodoListItem({ todo }) {
  return (
    <li key={todo.id}>
      <span>{todo.title}</span>
    </li>
  );
}

export default TodoListItem;
