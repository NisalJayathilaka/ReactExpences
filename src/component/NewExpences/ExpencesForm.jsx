import React, { useState } from "react";
import "./ExpencesForm.css";

const ExpencesForm = (props) => {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function updateData(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((previuos) => {
      return {
        ...previuos,
        [name]: value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenceData = {
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };

    setData({
        title: "",
        amount: "",
        date: "",
    })
    props.onsaveExpenceData(expenceData)
   // console.log(expenceData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={updateData}
            type="text"
            name="title"
            placeholder="Enter title"
            value={data.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={updateData}
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            placeholder="Enter amount"
            value={data.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={updateData}
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={data.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default ExpencesForm;

// <input type="text" name="amount" placeholder="Enter amount"></input>
