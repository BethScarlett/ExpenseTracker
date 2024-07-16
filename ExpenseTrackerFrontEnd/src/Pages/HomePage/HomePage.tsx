import TransactionTab from "../../Components/TransactionTab/TransactionTab";
import Transaction from "../../Types/TransactionType";
import "./HomePage.scss";

type HomePageProps = {
  transactions: Transaction[];
};

const HomePage = ({ transactions }: HomePageProps) => {
  const calculateTotal = () => {
    let total: number = 0;
    transactions.forEach((transaction) => {
      total += transaction.transaction_amount;
    });
    return Math.round(total * 100) / 100;
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
    </>
  );
};

export default HomePage;
