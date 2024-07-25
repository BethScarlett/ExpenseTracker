import LoginForm from "../../Components/LoginForm/LoginForm";
import Account from "../../Types/AccountType";
import "./CreateAccountPage.scss";

type CreateAccountPageProps = {
  existingUser: boolean;
  handleCreateAccount: (details: Account) => void;
};

const CreateAccountPage = ({
  existingUser,
  handleCreateAccount,
}: CreateAccountPageProps) => {
  return (
    <div className="create-form">
      {existingUser ? <label>User already exists</label> : null}
      <LoginForm
        userNotFound={false}
        formType="newUser"
        handleCreateAccount={handleCreateAccount}
      />
      {/* TODO - Add link back to home page */}
    </div>
  );
};

export default CreateAccountPage;
