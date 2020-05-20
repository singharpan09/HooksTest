import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("Mukesh");
  const [age, setAge] = useState(21);

  const Increment = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      <h2>This is React Hooks</h2>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => setName("Rahul")}>change Name</button>
      <button onClick={() => Increment()}>Increase age</button>
    </div>
  );
}

export default App;
//now in hooks state do not necessarly be javascript object
//there can be multiple state
//state can be number,string,boolean,arrya..etc
//now age will be not be effective..b'coz they both are different
