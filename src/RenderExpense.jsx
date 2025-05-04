import ExpenseItem from "./ExpenseItem";
import "./CSS/RenderExpense.css";
import Card from "./Card";
import { useContext } from "react";
import { FormContext } from "./Context";
import NewExpense from "./NewExpense";

function RenderExpense() {
  const { expenses } = useContext(FormContext);

  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default RenderExpense;
