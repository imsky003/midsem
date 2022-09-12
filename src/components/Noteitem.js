import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className="col-md-3 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i
              className="fa fa-edit mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fas fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id); props.showAlert("deleted successfully", "success");
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noteitem;
