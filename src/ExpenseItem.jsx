import "./CSS/Expense.css";
import Card from "./Card";

function ExpenseItem({ date, title, amount }) {
  return (
    <Card className="App">
      <div className="expense-item">
        <div className="expense-item__date">
          <div className="expense-date__month">
            {date.toLocaleString("en-US", { month: "long" })}
          </div>
          <div className="expense-date__day">
            {date.toLocaleString("en-US", { day: "2-digit" })}
          </div>
          <div className="expense-date__year">{date.getFullYear()}</div>
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
