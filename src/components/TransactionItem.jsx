import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { formatCurrency } from "../utils/format";

const TransactionItem = ({ tx }) => {
  const { role, deleteTransaction } = useContext(AppContext);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this transaction?");
    if (confirmDelete) {
      deleteTransaction(tx.id);
    }
  };

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-medium">{tx.category}</p>
        <p className="text-sm text-gray-500">{tx.date}</p>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={tx.type === "income" ? "text-green-500" : "text-red-500"}
        >
          {formatCurrency(tx.amount)}
        </span>

        {role === "admin" && (
          <button onClick={handleDelete} className="text-red-500 text-sm">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionItem;