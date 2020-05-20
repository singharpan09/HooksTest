import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

const Home = () => {
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  //we are calling useEffect in homw component
  //this is now equivalent to ComponentDidMount
  return (
    <React.Fragment>
      <h3>This is Home Component</h3>
      <Link to="/about">go to about</Link>
    </React.Fragment>
  );
};
const About = () => {
  return (
    <React.Fragment>
      <h3>This is About Component</h3>
    </React.Fragment>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
