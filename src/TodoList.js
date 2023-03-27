import React from "react";

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
      {todoList.map(function (item) {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
