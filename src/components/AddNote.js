import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h2 className="text-center">Add a Note for {localStorage.getItem('email')}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleclick}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;