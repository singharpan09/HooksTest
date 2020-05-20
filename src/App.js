import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setjoke] = useState("loading");
  //initlially joke will show as loading ...then will set it
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe")
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setjoke(res2.value.joke);
      });
  }, []);
  //setjoke method will be called in useEffect..when data get fetched
  return (
    <React.Fragment>
      <div className="App">
        <h1>This is Test App</h1>
        <h4>{joke}</h4>
      </div>
    </React.Fragment>
  );
}

export default App;

//http://www.icndb.com/api/
//API
//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
