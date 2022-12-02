import "./Expences.css";
import ExpenceItem from "./ExpenceItem"
import Card from "../UI/Card";

function Expences(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => {
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
