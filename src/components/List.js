import React, { useEffect, useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

function List() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    document.title = `You have ${listItems.length} things to do today`;
  });

  const addTodos = (listItem) => {
    //   does not account for whitespace
    const formattedText = listItem.text.trim();
    if (!formattedText) {
      return;
    }
    const allTodos = [listItem, ...listItems];
    setListItems(allTodos);
  };

  const completeTodo = (id) => {
    let updatedList = listItems.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setListItems(updatedList);
  };

  const removeTodo = (id) => {
    let updatedList = [...listItems].filter((item) => item.id !== id);
    setListItems(updatedList);
  };
  return (
    <div>
      <h1>{`You have ${listItems.length} things to do`}</h1>
      <TodoForm onSubmit={addTodos} />
      <Todo
        todos={listItems}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default List;
