import React from "react";
import expenses from "../data";
import Expences from "./Expences/Expences";

function App() {
  return (
    <div>
      <h1>let's started </h1>
      <Expences expenses={expenses}/>
    </div>
  );
}

export default App;
