import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe")
      .then((res) => res.json())
      .then((res2) => console.log(res2));
  });
  //fetching of random joke using "useEffect"
  return (
    <React.Fragment>
      <h1>This is Test App</h1>
    </React.Fragment>
  );
}

export default App;

//http://www.icndb.com/api/
//API
//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
