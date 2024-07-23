import LoginForm from "../../Components/LoginForm/LoginForm";
import Account from "../../Types/AccountType";
import "./CreateAccountPage.scss";

type CreateAccountPageProps = {
  handleCreateAccount: (details: Account) => void;
};

const CreateAccountPage = ({ handleCreateAccount }: CreateAccountPageProps) => {
  return (
    <div className="create-form">
      <LoginForm
        userNotFound={false}
        formType="newUser"
        handleCreateAccount={handleCreateAccount}
      />
    </div>
  );
};

export default CreateAccountPage;
