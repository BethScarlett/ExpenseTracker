import Transaction from "../Types/TransactionType";

export const handleGetDistinctCategories = (transactions: Transaction[]) => {
  let barChartLabels: string[] = [];
  transactions.map((transaction) => {
    if (!barChartLabels.includes(transaction.category)) {
      barChartLabels.push(transaction.category);
    }
  });
  return barChartLabels;
};
