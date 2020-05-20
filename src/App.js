import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setjoke] = useState("loading");
  const newJoke = () => {
    fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe")
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setjoke(res2.value.joke);
      });
  };
  useEffect(() => {
    newJoke();
  }, []);
  //initllly newJoke will be called when Componentmount
  //then will fetch new joke onCLick event
  //now we will fetch joke with our given name
  return (
    <React.Fragment>
      <div className="App">
        <h1>This is Test App</h1>
        <button onClick={() => newJoke()}>Get New Joke</button>
        <h4>{joke}</h4>
      </div>
    </React.Fragment>
  );
}

export default App;

//http://www.icndb.com/api/
//API
//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
