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
      {userNotFound ? <label>No user found with those details</label> : null}
      <div className="loginform__links">
        <Link
          className="loginform__links loginform__links--signup"
          to={"/create"}
        >
          Sign Up
        </Link>
        <Link className="loginform__links loginform__links--forgpass" to={"/"}>
          Forgotten Password
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
