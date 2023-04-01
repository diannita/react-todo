import React from "react";

function TodoListItem(props) {
  const { todo } = props;
  return (
    <li key={todo.id}>
      <span>{todo.title}</span>
    </li>
  );
}

export default TodoListItem;
