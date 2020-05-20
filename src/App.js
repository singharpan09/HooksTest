import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("Mukesh");
  const [no, setNo] = useState(21);
  //now this will update no by "3"
  const Increment = () => {
    setNo((prevNo) => prevNo + 1);
    setNo((prevNo) => prevNo + 1);
    setNo((prevNo) => prevNo + 1);
  };
  return (
    <div className="App">
      <h2>This is React Hooks</h2>
      <p>{name}</p>
      <p>{no}</p>
      <button onClick={() => setName("Rahul")}>change Name</button>
      <button onClick={() => Increment()}>Increase age</button>
    </div>
  );
}

export default App;
//this is the correct approch for updating the state
