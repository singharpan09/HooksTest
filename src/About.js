import React from "react";
import { useHistory, Route, useRouteMatch } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const match = useRouteMatch();
  console.log(history);
  return (
    <React.Fragment>
      <h3>This is About component</h3>

      <button
        className="btn waves-effect waves-light"
        onClick={() => history.goBack()}
      >
        Back to Home
      </button>
      <Route
        path={`${match.url}/about2`}
        render={() => <div>Hello nested roue</div>}
      />
    </React.Fragment>
  );
};

export default About;
