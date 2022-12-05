import React, { useState } from "react";
import expenses from "../data";
import Expences from "./Expences/Expences";
import NewExpences from "./NewExpences/NewExpences";

function App() {
 const [expences, setExpences] = useState(expenses);

  const addExpenceHandler = (expence)=>{
    // console.log('In App.js');
    // console.log(expence);
    setExpences((previous)=>{
       return [
        expence,
        ...previous
        
       ]
    });
  }

  return (
    <div>
      <h1>let's started </h1>
      <NewExpences onAddExpences={addExpenceHandler}/>   
      <Expences expenses={expences}/>
    </div>
  );
}

export default App;
