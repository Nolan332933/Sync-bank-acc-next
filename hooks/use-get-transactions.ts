import { Transaction } from "plaid";
import { useState } from "react";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  const getTransactions = (publicToken: string) => {
    fetch(`/api/transactions?publicToken=${publicToken}`)
      .then((res) => res.json())
      .then((data) => setTransactions(data.data));
  };

  return { transactions, getTransactions };
};
