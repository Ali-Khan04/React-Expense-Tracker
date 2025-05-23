import RenderExpense from "./RenderExpense";
import RenderNewExpense from "./RenderNewExpense";
import "./CSS/index.css";
import { useState } from "react";
import { FormContext } from "./Context";
const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  function handleExpenses(expense) {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }
  return (
    <FormContext.Provider value={{ handleExpenses, expenses }}>
      <RenderNewExpense />
      <RenderExpense />
    </FormContext.Provider>
  );
}

export default App;
