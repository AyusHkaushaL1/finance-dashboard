import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions, role, addTransaction } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const filtered = transactions.filter((tx) =>
    tx.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!amount || !category) return;

    addTransaction({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type,
    });

    setAmount("");
    setCategory("");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-3">Transactions</h2>

      <input
        type="text"
        placeholder="Search category"
        className="w-full border p-2 rounded mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {role === "admin" && (
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            className="border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center mt-4">
          No transactions found
        </p>
      ) : (
        filtered.map((tx) => (
          <TransactionItem key={tx.id} tx={tx} />
        ))
      )}
    </div>
  );
};

export default TransactionList;