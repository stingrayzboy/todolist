import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (!title || !desc) {
      alert("Please fill the form!!");
    } else {
      props.addTodo(title, desc);
      setDesc("");
      setTitle("");
    }
  };
  return (
    <>
      <form onSubmit={submit}>
        <h3>Add a Todo</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddTodo;
