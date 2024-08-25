import { Transaction } from "plaid";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { formatCategory, formatCurrency, formatDate } from "@/lib/utils";

type Props = {
  data: Transaction[];
};

export const TransactionsCard = ({ data }: Props) => {
  return (
    <Card className="max-w-screen-md w-full">
      <CardHeader>
        <CardTitle>
          Transactions
        </CardTitle>
        <CardDescription>
          A list of your recent invoices
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payee</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((transaction) => (
              <TableRow key={transaction.transaction_id}>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>{formatCategory(transaction.personal_finance_category?.primary)}</TableCell>
                <TableCell className="text-right">{formatCurrency(transaction.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
