import React from "react";
import { useContext, useState } from "react";
import { FormContext } from "./Context";
import "./CSS/NewExpense.css";

export default function NewExpense() {
  const { handleExpenses } = useContext(FormContext);

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target; // destructred from target
    setUserInput((prevState) => {
      return {
        ...prevState, //old state
        [name]: value,
      };
    });
  }
  function handleSubmitButton(e) {
    e.preventDefault();

    const newExpense = {
      id: Math.random().toString(),
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };

    handleExpenses(newExpense);

    setUserInput({ title: "", amount: "", date: "" });
  }

  return (
    <div className="new-expense">
      <form onSubmit={handleSubmitButton}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={userInput.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={userInput.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={userInput.date}
              min="2020-01-01"
              max="2025-12-31"
              onChange={handleInputChange}
            />
          </div>

          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}
