import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, useHistory } from "react-router-dom";

//now will use "useHistory" hooks to access history  used for redirection
//now we have access of all history
const Home = () => {
  const history = useHistory();
  console.log(history);
  return (
    <React.Fragment>
      <h3>This is Home component</h3>

      <button
        className="btn waves-effect waves-light"
        onClick={() => history.push("/about")}
      >
        Navigate to about
      </button>
    </React.Fragment>
  );
};

//all components get props from router
//now no props  will be avilable to the components

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
