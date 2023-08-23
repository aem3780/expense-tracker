import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilites" },
    { id: 2, description: "bbb", amount: 10, category: "utilites" },
    { id: 3, description: "ccc", amount: 10, category: "utilites" },
    { id: 4, description: "ddd", amount: 10, category: "utilites" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
