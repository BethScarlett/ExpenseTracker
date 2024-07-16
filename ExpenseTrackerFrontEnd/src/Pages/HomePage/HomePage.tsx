import TransactionTab from "../../Components/TransactionTab/TransactionTab";
import Transaction from "../../Types/TransactionType";
import "./HomePage.scss";

type HomePageProps = {
  transactions: Transaction[];
};

const HomePage = ({ transactions }: HomePageProps) => {
  console.log(transactions);

  return (
    <>
      <div>This is the home page</div>
      <h1>£0</h1>
      <div>
        <button>Week</button>
        <button>Month</button>
      </div>
      <div>
        <label>List of transactions go here</label>
        {transactions.map((transaction, i) => (
          <>
            <div key={i}>
              <TransactionTab
                name={transaction.transaction_name}
                category={transaction.category}
                cost={transaction.transaction_amount}
                date={transaction.date}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default HomePage;
