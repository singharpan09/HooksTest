import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
