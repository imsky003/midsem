import React, { useState } from "react";
import "./style.css";

export default function Shop() {
  const [state, setState] = useState({
    name: "",
    description: "",
   
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
        <h1>New Shop</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.className}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-control">
          <label></label>
          <button type="submit" className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
}
