import { FormEvent, useState } from "react";
import "./LoginForm.scss";
import { Link } from "react-router-dom";
import Login from "../../Types/LoginType";

type LoginFormProps = {
  handleLogin: (details: Login) => void;
};

const LoginForm = ({ handleLogin }: LoginFormProps) => {
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
  });
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  let validDetails: boolean = true;

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidation(formData);
    if (validDetails) {
      console.log(formData);
    }
  };

  const handleValidation = (details: Login) => {
    if (details.email == "" || !details.email.includes("@")) {
      setInvalidEmail(true);
      validDetails = false;
    } else {
      setInvalidEmail(false);
    }

    if (details.password == "") {
      setInvalidPassword(true);
      validDetails = false;
    } else {
      setInvalidPassword(false);
    }
  };

  return (
    <>
      <form action="" className="loginform" onSubmit={handleSubmit}>
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
            value={formData.email}
            onChange={handleChange}
            className="loginform__input loginform__input--field"
          />
          {invalidEmail ? <label>Please enter a valid email</label> : null}
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
            value={formData.password}
            onChange={handleChange}
            className="loginform__input loginform__input--field"
          />
          {invalidPassword ? (
            <label>Please enter a valid password</label>
          ) : null}
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
