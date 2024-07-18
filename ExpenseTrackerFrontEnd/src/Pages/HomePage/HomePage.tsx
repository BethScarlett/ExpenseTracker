import TransactionTab from "../../Components/TransactionTab/TransactionTab";
import Transaction from "../../Types/TransactionType";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./HomePage.scss";

type HomePageProps = {
  transactions: Transaction[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = ({ transactions }: HomePageProps) => {
  //TODO - Refactor code to use state to store categories and amounts, and reduce functions to one
  const options = {};

  const handleGetDistinctCategories = () => {
    let barChartLabels: string[] = [];
    transactions.map((transaction) => {
      if (!barChartLabels.includes(transaction.category)) {
        barChartLabels.push(transaction.category);
      }
    });
    console.log(barChartLabels);
    return barChartLabels;
  };

  const handleGetCategoryTotals = () => {
    let tempCategories: string[] = [];
    let barChartTotals: number[] = [];

    transactions.map((transaction) => {
      if (!tempCategories.includes(transaction.category)) {
        tempCategories.push(transaction.category);
        barChartTotals.push(transaction.transaction_amount);
      } else {
        const i = tempCategories.indexOf(transaction.category);
        barChartTotals[i] += transaction.transaction_amount;
      }
    });
    console.log(barChartTotals);
    return barChartTotals;
  };

  const calculateTotal = () => {
    let total: number = 0;
    transactions.forEach((transaction) => {
      total += transaction.transaction_amount;
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

  return (
    <>
      <h1 className="homepage-title">Manage Money</h1>
      <h5 className="homepage-title"> Total spend:</h5>
      <div className="homepage-total">
        <h1 className="homepage-total__number">£{calculateTotal()}</h1>
        <div className="homepage-total__buttons">
          <button>Week</button>
          <button>Month</button>
        </div>
      </div>
      <div className="homepage-transactions">
        {transactions.map((transaction, i) => (
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
        <Bar options={options} data={barChartData} />
      </div>
    </>
  );
};

export default HomePage;
