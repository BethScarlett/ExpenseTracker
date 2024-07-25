import TransactionTab from "../../Components/TransactionTab/TransactionTab";
import Transaction from "../../Types/TransactionType";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { handleSelectMonth, months } from "../../Utils/dateUtils";
import RightArrow from "/up-arrow.png";
import LeftArrow from "/down-arrow.png";

type HomePageProps = {
  transactions: Transaction[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = ({ transactions }: HomePageProps) => {
  const [stateTransactions, setStateTransactions] = useState<Transaction[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [lastMonth, setLastMonth] = useState<number>(0);
  const options = {};

  useEffect(() => {
    const reverse: Transaction[] = [];
    transactions.map((transaction) => {
      reverse.unshift(transaction);
    });

    const transacDateSplit: string = reverse[0].date.split("-")[1];
    if (transacDateSplit.split("")[0] == "0") {
      setLastMonth(Number(transacDateSplit[1]));
    } else {
      setLastMonth(Number(transacDateSplit));
    }

    setStateTransactions(reverse);
  }, []);

  const handleGetDistinctCategories = () => {
    let barChartLabels: string[] = [];
    stateTransactions.map((transaction) => {
      if (!barChartLabels.includes(transaction.category)) {
        barChartLabels.push(transaction.category);
      }
    });
    return barChartLabels;
  };

  const handleGetCategoryTotals = () => {
    let tempCategories: string[] = [];
    let tempTotals: number[] = [];

    stateTransactions.map((transaction) => {
      if (!tempCategories.includes(transaction.category)) {
        tempCategories.push(transaction.category);
        tempTotals.push(transaction.transaction_amount);
      } else {
        const i = tempCategories.indexOf(transaction.category);
        tempTotals[i] += transaction.transaction_amount;
      }
    });

    return tempTotals;
  };

  const calculateTotal = () => {
    let total: number = 0;
    stateTransactions.forEach((transaction) => {
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

  const barChartData = {
    labels: handleGetDistinctCategories(),
    datasets: [
      {
        label: "Transactions",
        data: handleGetCategoryTotals(),
        backgroundColor: ["rgba(255, 0, 0)", "rgba(0, 255, 0)"],
        borderWidth: 1,
      },
    ],
  };

  const lineGraphData = {
    labels: months,
    datasets: [
      {
        label: "Transactions",
        data: handleGetCategoryTotals(),
        borderColor: "rgba(255, 0, 0)",
      },
    ],
  };

  const handleIncrementMonth = () => {
    if (selectedMonth > 0) {
      console.log("Selected month index is " + (selectedMonth - 1));
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleDecrementMonth = () => {
    if (selectedMonth < lastMonth - 1) {
      console.log("Selected month index is " + (selectedMonth + 1));
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <>
      <h1 className="homepage-title">Manage Money</h1>
      <h5 className="homepage-title">
        Total spend for {handleSelectMonth(selectedMonth)}:
      </h5>
      <div>
        <div className="homepage-total">
          <img
            src={LeftArrow}
            alt="Left Arrow"
            id="left-arrow"
            onClick={handleIncrementMonth}
          />
          <h1 className="homepage-total__number">£{calculateTotal()}</h1>
          <img
            src={RightArrow}
            alt="Right Arrow"
            id="right-arrow"
            onClick={handleDecrementMonth}
          />
        </div>
      </div>
      <div className="homepage-transactions">
        {stateTransactions.map((transaction, i) => (
          <div key={i} className="homepage-transactions__transaction">
            <TransactionTab
              name={transaction.transaction_name}
              category={transaction.category}
              cost={transaction.transaction_amount}
              date={transaction.date}
            />
          </div>
        ))}
      </div>
      <div>
        <label>Category Breakdown</label>
        <Bar options={options} data={barChartData} />
      </div>
      <div>
        <label>Month to month change</label>
        <Line options={options} data={lineGraphData} />
      </div>
    </>
  );
};

export default HomePage;
