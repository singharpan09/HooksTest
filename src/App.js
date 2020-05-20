import React, { useState, useEffect } from "react";
//useEffect is "Mixer" of "ComponentDidMount" and "ComponentDidUpdate"
//this method involves itself like ComponentDidMount and called Everytime whenever any state update
import "./App.css";

function App() {
  const [name, setName] = useState("Mukesh");
  const [no, setNo] = useState(21);

  const Increment = () => {
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
