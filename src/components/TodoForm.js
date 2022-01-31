import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: nanoid(),
      text: input,
    });

    setInput("");
  };

  return (
    <Fragment>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={input}
          id="text"
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add</button>
      </form>
    </Fragment>
  );
}

export default TodoForm;
