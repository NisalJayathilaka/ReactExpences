import React,{useState} from 'react'
import "./Expences.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpencesFilter/ExpensesFilter";

function Expences(props) {
  const [filterYear,setFilteredYear] = useState('2020')

  const filterChanegHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChanegHandler} />
      {props.expenses.map((item) => {
        return (
          <div>
            <ExpenceItem
              key={item.id}
              title={item.title}
              price={item.amount}
              year={item.date}
            />
          </div>
        );
      })}
    </Card>
  );
}

export default Expences;
