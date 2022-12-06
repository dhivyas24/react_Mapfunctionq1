import React from "react";
import ReactDOM from "react-dom";

function App() {
  const names = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  const nameList = names.map((name) => (
    <div>
      <table border="1" cellpadding="10" cellspacing="0" width="50%">
        <td>{name}</td>
      </table>
    </div>
  ));
  return <div>{nameList}</div>;
}

export default App;
