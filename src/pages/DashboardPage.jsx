import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import BalanceChart from "../components/BalanceChart";
import CategoryChart from "../components/CategoryChart";
import TransactionList from "../components/TransactionList";
import Insights from "../components/Insights";
import RoleSwitcher from "../components/RoleSwitcher";

const DashboardPage = () => {
  const { transactions, role } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);

  const chartData = transactions.map(t => ({
    date: t.date,
    amount: t.amount
  }));

  const categoryData = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, curr) => {
      const found = acc.find(i => i.name === curr.category);
      if (found) {
        found.value += curr.amount;
      } else {
        acc.push({ name: curr.category, value: curr.amount });
      }
      return acc;
    }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      <p className="text-sm text-gray-500 mb-4">Role: {role}</p>

      <div className="grid grid-cols-3 gap-4">
        <SummaryCard title="Balance" amount={income - expense} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expense} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <BalanceChart data={chartData} />
        <CategoryChart data={categoryData} />
      </div>

      <TransactionList />
      <Insights />

    </div>
  );
};

export default DashboardPage;