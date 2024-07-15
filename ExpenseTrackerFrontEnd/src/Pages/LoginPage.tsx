import "./LoginPage.scss";
import LoginForm from "../Components/LoginForm/LoginForm";
import Login from "../Types/LoginType";

type LoginPageProps = {
  handleLogin: (details: Login) => void;
  userNotFound: boolean;
};

const LoginPage = ({ handleLogin, userNotFound }: LoginPageProps) => {
  return (
    <div className="loginpage">
      <h1 className="loginpage__title">Manage Money</h1>
      <LoginForm handleLogin={handleLogin} userNotFound={userNotFound} />
    </div>
  );
};

export default LoginPage;
