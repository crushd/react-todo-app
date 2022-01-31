import React, { Fragment, useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
          ref={inputRef}
        />
        <button className="todo-button">Add</button>
      </form>
    </Fragment>
  );
}

export default TodoForm;
