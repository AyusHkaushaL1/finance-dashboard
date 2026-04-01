import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const topCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "N/A";

  const avgExpense =
    expenses.length > 0
      ? Math.round(totalExpense / expenses.length)
      : 0;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Insights</h2>
      <p>Total Expense: ₹ {totalExpense}</p>
      <p>Top Category: {topCategory}</p>
      <p>Average Expense: ₹ {avgExpense}</p>
    </div>
  );
};

export default Insights;