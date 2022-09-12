import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let history = useNavigate();
  const { name, email, password, cpassword } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"

      },

      body: JSON.stringify({ name, email, password, cpassword }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      history("/");
      props.showAlert("Successfully Login", "success")
    } else {

      props.showAlert("Invalid credentials", "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return <div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name="password" id="password" className="form-control" value={credentials.password} onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
        <input type="password" name="cpassword" id="cpassword" className="form-control" value={credentials.cpassword} onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
}

export default Signup;
