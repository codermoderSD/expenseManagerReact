import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // useState is hooks and all hooks generally starts with use....and it should be called directly within the main function.
  // [] is called Array destructuring so that we can store array returned by useState (for refresher see js section)
  // useState returns array which contains:
  //[variable, functionToUpdateVariable]
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  return (
    // list because the ExpenseList is a ul
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs.{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
