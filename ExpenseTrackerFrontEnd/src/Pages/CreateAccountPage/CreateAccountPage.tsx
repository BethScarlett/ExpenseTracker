import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Account from "../../Types/AccountType";
import "./CreateAccountPage.scss";

type CreateAccountPageProps = {
  existingUser: boolean;
  handleCreateAccount: (details: Account) => void;
  handleReset: () => void;
};

const CreateAccountPage = ({
  existingUser,
  handleCreateAccount,
  handleReset,
}: CreateAccountPageProps) => {
  return (
    <div className="create-form">
      {existingUser ? <label>User already exists</label> : null}
      <LoginForm
        userNotFound={false}
        formType="newUser"
        handleCreateAccount={handleCreateAccount}
      />
      <Link
        to={"/"}
        className="frgtn-pass-form__link frgtn-pass-form__link--hover"
        onClick={handleReset}
      >
        Back to login
      </Link>
    </div>
  );
};

export default CreateAccountPage;
