import React, { useState } from "react";
import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import Card from "../UI/Card"

function ExpenceItem(props) {
  const [title,setTitle] = useState(props.title);

  function updateTitle(){
    setTitle("updated");
  }
  return (
    <Card className="expense-item">
      <ExpenceDate year={props.year} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.price} </div>
      </div>
      <button onClick={updateTitle}>assasa</button>
    </Card>
  );
}

export default ExpenceItem;
