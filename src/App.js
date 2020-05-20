import React, { useState } from "react";

import "./App.css";

function App() {
  const [data, setdata] = useState({
    name: "Mukesh",
    age: 21,
  });
  return (
    <div className="App">
      <h2>This is React Hooks</h2>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <button onClick={() => setdata({ ...data, name: "Rahul" })}>
        change Name
      </button>
    </div>
  );
}

export default App;
//this is like setState to change the state
//but here is a problem...while changing the name here...age data will be lost
//this problem can be resolved by first spreading the state,then overriding the name property
//but this is not a good approach
//That's why here comes the approch of "Multiple states" in hooks
//we can make multiple states in hooks
