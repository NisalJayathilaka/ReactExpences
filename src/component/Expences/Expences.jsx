import React, { useState } from "react";
import "./Expences.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpencesFilter/ExpensesFilter";
import ExpencesChart from "./ExpencesChart";

function Expences(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChanegHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterredByYear = props.expenses.filter((expence)=>{
    return expence.date.getFullYear().toString() === filterYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChanegHandler}
      />
      
      <ExpencesChart expences={filterredByYear}/>

      { filterredByYear.length ===0 ? <p style={{color: "white",textAlign: "center"}}>No Data to found</p> : filterredByYear.map((item) => {
        return (
          <ExpenceItem
            key={item.id}
            title={item.title}
            price={item.amount}
            year={item.date}
          />
        );
      })}
    </Card>
  );
}

export default Expences;
