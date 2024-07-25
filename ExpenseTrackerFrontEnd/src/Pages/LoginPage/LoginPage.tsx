import "./LoginPage.scss";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Login from "../../Types/LoginType";
import { Link } from "react-router-dom";

type LoginPageProps = {
  handleLogin: (details: Login) => void;
  userNotFound: boolean;
};

const LoginPage = ({ handleLogin, userNotFound }: LoginPageProps) => {
  return (
    <div className="loginpage">
      <h1 className="loginpage__title">Manage Money</h1>
      <LoginForm
        handleLogin={handleLogin}
        userNotFound={userNotFound}
        formType="login"
      />
      <div className="loginpage__links">
        <Link
          className="loginpage__links loginpage__links--hover"
          to={"/create"}
        >
          Sign Up
        </Link>
        <Link
          className="loginpage__links loginpage__links--hover"
          to={"/forgotten+password"}
        >
          Forgotten Password
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
