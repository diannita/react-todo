import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: "0",
    title: "Interview with the Vampire (1976)",
  },
  {
    id: "1",
    title: "The Vampire Lestat (1985)",
  },
  {
    id: "2",
    title: "The Queen of the Damned	(1988)",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
