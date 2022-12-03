import React from "react";
import expenses from "../data";
import Expences from "./Expences/Expences";
import NewExpences from "./NewExpences/NewExpences";

function App() {

  const addExpenceHandler = (expence)=>{
    console.log('In App.js');
    console.log(expence);
  }

  return (
    <div>
      <h1>let's started </h1>
      <NewExpences onAddExpences={addExpenceHandler}/>   
      <Expences expenses={expenses}/>
    </div>
  );
}

export default App;
