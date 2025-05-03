import NewExpense from "./NewExpense";
import { FormContext } from "./Context";
import { useState } from "react";

export default function RenderNewExpense() {
  const [form, setForm] = useState(null);

  function handleForm(userInput) {
    setForm(userInput);
    console.log("Form data:", userInput);
  }

  return (
    <FormContext.Provider value={{ handleForm }}>
      <NewExpense />
    </FormContext.Provider>
  );
}
