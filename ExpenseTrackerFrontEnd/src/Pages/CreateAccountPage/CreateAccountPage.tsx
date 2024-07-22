import LoginForm from "../../Components/LoginForm/LoginForm";
import "./CreateAccountPage.scss";

const CreateAccountPage = () => {
  return (
    <div>
      <LoginForm userNotFound={false} formType="newUser" />
    </div>
  );
};

export default CreateAccountPage;
