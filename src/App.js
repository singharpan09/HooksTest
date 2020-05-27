import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import PagenotFound from "./PagenotFound";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route render={() => <div>This is page not found</div>} />>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

//no need to give path for page not found
//this component will render on all unmathced url
//switch is important to use otherwise ...that component will render with all component
export default App;
