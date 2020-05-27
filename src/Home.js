import React from "react";

import { useHistory } from "react-router-dom";

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

export default Home;
