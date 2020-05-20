import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("Mukesh");
  const [no, setNo] = useState(21);

  const Increment = () => {
    setNo((prevNo) => prevNo + 1);
  };

  useEffect(() => {
    console.log("useEffect called");
  }, [no]);
  //there we put a condition
  //intilly useEffect will be called as ComponentDidMount
  //& will be only call again when "no" changes
  //will not be called when name change
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
