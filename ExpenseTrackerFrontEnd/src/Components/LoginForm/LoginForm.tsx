import "./LoginForm.scss";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <form action="" className="loginform">
        <div className="loginform__input">
          <label
            htmlFor="email"
            className="loginform__input loginform__input--label"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            className="loginform__input loginform__input--field"
          />
        </div>
        <div className="loginform__input">
          <label
            htmlFor="password"
            className="loginform__input loginform__input--label"
          >
            Password
          </label>
          <input
            type="text"
            name="password"
            className="loginform__input loginform__input--field"
          />
        </div>
        <button className="loginform__submit">Login</button>
        <div className="loginform__links">
          <Link className="loginform__links loginform__links--signup" to={"/"}>
            Sign Up
          </Link>{" "}
          <Link
            className="loginform__links loginform__links--forgpass"
            to={"/"}
          >
            Forgotten Password
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
