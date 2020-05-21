import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import {
  BrowserRouter,
  Route,
  useHistory,
  useParams,
  Switch,
} from "react-router-dom";

//now will use "useHistory" hooks to access history  used for redirection
//now we have access of all history
//useParams inilialized for using the "params"
const Home = () => {
  const history = useHistory();

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
  const history = useHistory();
  return (
    <React.Fragment>
      <h3>This is About component</h3>

      <button
        className="btn waves-effect waves-light"
        onClick={() => history.goBack()}
      >
        Back to Home
      </button>
    </React.Fragment>
  );
};
//goBack will take you to previous screen
//then will change stack sequence and navigate
//first url get PUSH to stack and then POP from stack
//stack concept is used in url pushing and poping
//will use params in profile components
const Profile = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <React.Fragment>
      <h3>This is Profile component</h3>
      <h4>your params id is {id}</h4>
    </React.Fragment>
  );
};
//switch make shure that only one route is true at time
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
            <Route path="/profile/:id">
              <Profile />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
