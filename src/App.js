import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  return <React.Fragment>This is Home component</React.Fragment>;
};

//all components get props from router

const About = () => {
  return <React.Fragment>This is About component</React.Fragment>;
};

const Profile = () => {
  return <React.Fragment>This is Profile component</React.Fragment>;
};
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
