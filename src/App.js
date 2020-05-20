import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

const Home = () => {
  useEffect(() => {
    return () => {
      //code cleanup code is written here
      console.log("ComponentWillUnmount");
    };
  }, []);
  //we are calling useEffect in homw component
  //this is now equivalent to ComponentDidMount
  //ab hum function return karwayege "useEffect" se
  //now this is equivalent to "ComponentWillUnmount"(when useEffect returns a function)
  //componenetWillUnmount is called when we want to clean memory
  //and component is not of use..when componenet is to be destroy...the last cycle of component
  //this is the last method
  //when we will go from Home component to About component ..this will be called...b'coz Home get destroy
  //this will be last method that run before destroying the component
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
