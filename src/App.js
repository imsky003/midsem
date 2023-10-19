import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Shop from "./components/Shop";


function App() {
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // };
  return (
    <div>
      
        <Router>
          
          <br />
          <br />
          
          <br></br>
          <div className="container mt-5 my-3  ">
            <Routes>
              <Route  path="/product" element={<Product />}></Route>
              <Route  path="/shop" element={<Shop />}></Route>
              
            </Routes>
          </div>
        </Router>
      
    </div>
  );
}

export default App;
