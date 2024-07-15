import "./LoginPage.scss";
import LoginForm from "../Components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <h1 className="loginpage__title">Manage Money</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
