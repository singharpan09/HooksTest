import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>This is Test App</h1>
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
