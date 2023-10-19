import React, { useState } from "react";
import "./style.css";

export default function Product() {
  const [state, setState] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(state.price !='' ){

        console.log("Submitted value: ", state);
    }else{
        setErrorMessage(" *price should be in number format")
    }
  };
  const handleCancel = (event) => {
    event.preventDefault();
    setState(state.name="",state.description="",state.category="",state.price="",state.quantity="")
  };
  return (
    <div className="App">
        <h1>New Product</h1>
      <form >
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
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
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={state.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            value={state.quantity}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-control">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={state.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="error"> {errorMessage} </div>
        <div className="form-control">
          <label></label>
          <button type="submit" onSubmit={handleSubmit} className="submitButton">Submit</button>
          <button type="submit" onSubmit={handleCancel} className="cancelButton">Cancel</button>
        </div>
      </form>
    </div>
  );
}
