import React from "react";

function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div className="rowActions" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <button className="actionButton" onClick={() => removeTodo(todo.id)}>
        delete
      </button>
      <button className="actionButton">Edit</button>
    </div>
  ));
}

export default Todo;
