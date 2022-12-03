import React from "react";
import ExpencesForm from "./ExpencesForm";
import './NewExpences.css'

const NewExpences =(props) =>{

    const saveExpencesDataHandler = (enteredExpenceData)=>{
       const expenceData = {
          ...enteredExpenceData,
          id:Math.random().toString()
       };
       //console.log(expenceData);
       props.onAddExpences(expenceData)
    }

    return(
        <div className="new-expense">
            <ExpencesForm  onsaveExpenceData={saveExpencesDataHandler}/>
        </div>
    );
}


export default NewExpences;