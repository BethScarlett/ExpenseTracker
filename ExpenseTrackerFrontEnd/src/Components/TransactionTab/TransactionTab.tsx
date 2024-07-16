import "./TransactionTab.scss";

type TransactionTabProps = {
  name: string;
  category: string;
  cost: number;
  date: string;
};

const TransactionTab = ({
  name,
  category,
  cost,
  date,
}: TransactionTabProps) => {
  return (
    <div className="transaction-tab">
      <div className="transaction-tab__top">
        <h4>
          {name} : {category}
        </h4>
        <h4>£{cost}</h4>
      </div>
      <div className="transaction-tab__bottom">
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default TransactionTab;
