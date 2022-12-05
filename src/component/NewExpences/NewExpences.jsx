import React, { useState } from "react";
import ExpencesForm from "./ExpencesForm";
import './NewExpences.css'

const NewExpences =(props) =>{
  
    const [isEditing,setIsEddting] = useState(false);

    const saveExpencesDataHandler = (enteredExpenceData)=>{
       const expenceData = {
          ...enteredExpenceData,
          id:Math.random().toString()
       };
       //console.log(expenceData);
       props.onAddExpences(expenceData)
       setIsEddting(false)
    }

    function updateIsediting(){
       setIsEddting(true);
    }

    function stopEdditng(){
        setIsEddting(false);
    }

    return(
        <div className="new-expense">
             {!isEditing && <button onClick={updateIsediting}> Add The Form</button>}
            {isEditing && <ExpencesForm  onsaveExpenceData={saveExpencesDataHandler} onCansel={stopEdditng}/>}
        </div>
    );
}


export default NewExpences;