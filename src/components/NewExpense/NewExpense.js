import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDateHandler = (onSaveExpenseDate) => {
    const expenseData = {
      ...onSaveExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onCansel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
