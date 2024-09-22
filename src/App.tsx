import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./componenta/Expenses";
import State from "./componenta/State";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Expenses />
        <State />
      </header>
    </div>
  );
}

export default App;
