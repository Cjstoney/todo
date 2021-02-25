import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleInput = (textInput) => {
    setInput(textInput.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={handleInput}
      ></input>
      <button className="submitButton">Add</button>
    </form>
  );
}

export default TodoForm;
