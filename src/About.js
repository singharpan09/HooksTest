import React from "react";
import { useHistory } from "react-router-dom";

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

export default About;
