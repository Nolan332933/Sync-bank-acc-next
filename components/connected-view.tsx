import { usePlaidLink } from "react-plaid-link";

import { ConnectCard } from "@/components/connect-card";
import { useTransactions } from "@/hooks/use-get-transactions";
import { TransactionsCard } from "@/components/transactions-card";

type Props = {
  linkToken: string;
};

export const ConnectedView = ({
  linkToken,
}: Props) => {
  const { transactions, getTransactions } = useTransactions();

  const plaid = usePlaidLink({
    token: linkToken,
    onSuccess: (publicToken) => {
      getTransactions(publicToken);
    },
    env: "sandbox",
  });

  if (transactions) {
    return (
      <TransactionsCard data={transactions} />
    );
  }

  return (
    <ConnectCard onClick={() => plaid.open()}  />
  );
};
