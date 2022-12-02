import React from "react";
import "./ExpenceDate.css"

function ExpenceDate(props) {
  const month = props.year.toLocaleString("default", { month: "long" });
  const year = props.year.getFullYear();
  const date = props.year.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
}

export default ExpenceDate;
