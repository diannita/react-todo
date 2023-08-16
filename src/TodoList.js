import React from "react";
import TodoListItem from "./TodoListItem";
import './styles.css'; // Import the styles

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
