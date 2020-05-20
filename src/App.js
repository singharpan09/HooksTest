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
    </div>
  );
}

export default App;

//This is basically destructuring for pulling the data (name can be any name)
//"data" will be used to show the state data
//"setdata" will be used to change the data (like setState in class component)
