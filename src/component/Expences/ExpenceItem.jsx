import React from "react";
import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import Card from "../UI/Card"

function ExpenceItem(props) {

  return (
    <Card className="expense-item">
      <ExpenceDate year={props.year} />
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> ${props.price} </div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
