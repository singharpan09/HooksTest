import React, { useState, useEffect } from "react";
//useEffect is "Mixer" of "ComponentDidMount" and "ComponentDidUpdate"
//this method involves itself like ComponentDidMount and called Everytime whenever any state update
//useEffect is a callback function
//But some time this behiour of useEffect can create problem..like when we are fetching some data..and then fetching another data from another API
//First API will be called again beacuse of its featuer like "ComponetDdiUpdate"
//so we need to change it's behavoiur as per our need
import "./App.css";

function App() {
  const [name, setName] = useState("Mukesh");
  const [no, setNo] = useState(21);

  const Increment = () => {
    setNo((prevNo) => prevNo + 1);
  };

  useEffect(() => {
    console.log("useEffect called");
  });
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
