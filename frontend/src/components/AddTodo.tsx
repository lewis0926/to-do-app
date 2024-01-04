import React, { useState } from 'react';
import { createTodo } from "../network/todoCrud";
// import { Todo } from "../models/Todo";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({
      title,
      details,
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add To Do Item</h3>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Details:</label>
        <input
          type="text"
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
