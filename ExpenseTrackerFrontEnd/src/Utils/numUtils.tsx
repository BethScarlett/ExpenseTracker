import Transaction from "../Types/TransactionType";

export const calculateTotal = (
  transactions: Transaction[],
  selectedMonth: number
) => {
  let total: number = 0;
  transactions.forEach((transaction) => {
    const transacDateSplit: string = transaction.date.split("-")[1];
    let selectedMonthString: string = (selectedMonth + 1).toString();

    if (transacDateSplit.split("")[0] == "0") {
      selectedMonthString = "0" + selectedMonthString;
    }

    if (transacDateSplit == selectedMonthString) {
      total += transaction.transaction_amount;
    }
  });
  return Math.round(total * 100) / 100;
};

export const calculateCategoryTotals = (transactions: Transaction[]) => {
  let tempCategories: string[] = [];
  let categoryTotals: number[] = [];

  transactions.map((transaction) => {
    if (!tempCategories.includes(transaction.category)) {
      tempCategories.push(transaction.category);
      categoryTotals.push(transaction.transaction_amount);
    } else {
      const i = tempCategories.indexOf(transaction.category);
      categoryTotals[i] += transaction.transaction_amount;
    }
  });

  return categoryTotals;
};

export const calculateAllTotals = (transactions: Transaction[]) => {
  const months: string[] = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const totals: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  transactions.map((transaction) => {
    if (!months.includes(transaction.date.split("-")[1])) {
      months.push(transaction.category);
      totals.push(transaction.transaction_amount);
    } else {
      const i = months.indexOf(transaction.date.split("-")[1]);
      totals[i] += transaction.transaction_amount;
    }
  });

  return totals;
};
