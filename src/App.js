import * as React from "react";

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

function App() {
  const listTodoItems = todoList.map(function (item) {
    return (
      <li key={item.id}>
        <span>{item.title}</span>
      </li>
    );
  });

  return (
    <div>
      <session>
        <h1>Todo List</h1>
      </session>

      <session>
        <ul>{listTodoItems}</ul>
      </session>
    </div>
  );
}

export default App;
