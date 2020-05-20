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
  }, []);
  //now useEffect will behave like "ComponentDidMount" and will be called only once
  //In this array we write dependencies or use when we want conditional rendering
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
