import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setjoke] = useState("loading");
  const [fname, setfname] = useState("john");
  const [lname, setlname] = useState("doe");
  const newJoke = (firstname, lastname) => {
    fetch(
      `http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`
    )
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setjoke(res2.value.joke);
      });
  };
  useEffect(() => {
    newJoke(fname, lname);
  }, [fname, lname]);

  //now useEffect will call the API whenever any change in "fname" or "lname" happens
  //we can use more than one useEffect according to our needs
  return (
    <React.Fragment>
      <div className="App">
        <h1>This is Test App</h1>
        <input
          type="text"
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <input
          type="text"
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />

        <h4>{joke}</h4>
      </div>
    </React.Fragment>
  );
}
//now will fetch the new joke without click event
//name passed from input field to joke API
export default App;

//http://www.icndb.com/api/
//API
//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
