import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("Mukesh");
  const [no, setNo] = useState(21);
  //Clicking on increment button should increase number by "3"
  //but this is not happing...setNo() is not always getting the previous updated state
  const Increment = () => {
    setNo(no + 1);
    setNo(no + 1);
    setNo(no + 1);
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
//functional component don't use "this" keyword
//now in hooks state do not necessarly be javascript object
//there can be multiple state
//state can be number,string,boolean,arrya..etc
//now age will be not be effective..b'coz they both are different
