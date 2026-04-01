import { createContext, useState, useEffect } from "react";
import { transactionsData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("viewer");

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    } else {
      setTransactions(transactionsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([tx, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};