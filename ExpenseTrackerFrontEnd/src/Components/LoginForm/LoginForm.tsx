import { FormEvent, useState } from "react";
import "./LoginForm.scss";
import Login from "../../Types/LoginType";
import Account from "../../Types/AccountType";

type LoginFormProps = {
  handleLogin?: (details: Login) => void;
  handleCreateAccount?: (details: Account) => void;
  userNotFound: boolean;
  formType: "login" | "newUser";
};

const LoginForm = ({
  handleLogin,
  handleCreateAccount,
  userNotFound,
  formType,
}: LoginFormProps) => {
  const [loginData, setLoginData] = useState<Login>({
    email: "",
    password: "",
  });
  const [accountData, setAccountData] = useState<Account>({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });
  const [invalidFirstname, setInvalidFirstname] = useState<boolean>(false);
  const [invalidSurname, setInvalidSurname] = useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  let validDetails: boolean = true;

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (formType == "login") {
      setLoginData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setAccountData((prevFromData) => ({
        ...prevFromData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType == "login" && handleLogin != undefined) {
      handleValidation(loginData);
      if (validDetails) {
        handleLogin(loginData);
      }
    } else if (formType == "newUser" && handleCreateAccount != undefined) {
      handleValidation(accountData);
      if (validDetails) {
        handleCreateAccount(accountData);
      }
    }
  };

  const handleValidation = (details: Login | Account) => {
    if ("firstname" in details) {
      if (details.firstname == "") {
        setInvalidFirstname(true);
        validDetails = false;
      } else {
        setInvalidFirstname(false);
      }

      if (details.surname == "") {
        setInvalidSurname(true);
        validDetails = false;
      } else {
        setInvalidSurname(false);
      }
    }

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
      {formType == "newUser" && (
        <form className="loginform" onSubmit={handleSubmit}>
          <div className="loginform__input">
            <label
              htmlFor="firstname"
              className="loginform__input loginform__input--label"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={accountData.firstname}
              onChange={handleChange}
              className="loginform__input loginform__input--field"
            />
            {invalidFirstname ? (
              <label>Please enter a valid first name</label>
            ) : null}
          </div>
          <div className="loginform__input">
            <label
              htmlFor="surname"
              className="loginform__input loginform__input--label"
            >
              Last Name
            </label>
            <input
              type="text"
              name="surname"
              value={accountData.surname}
              onChange={handleChange}
              className="loginform__input loginform__input--field"
            />
            {invalidSurname ? (
              <label>Please enter a valid last name</label>
            ) : null}
          </div>
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
              value={accountData.email}
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
              value={accountData.password}
              onChange={handleChange}
              className="loginform__input loginform__input--field"
            />
            {invalidPassword ? (
              <label>Please enter a valid password</label>
            ) : null}
          </div>
          <button className="loginform__submit">Login</button>
        </form>
      )}
      {formType == "login" && (
        <form className="loginform" onSubmit={handleSubmit}>
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
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleChange}
              className="loginform__input loginform__input--field"
            />
            {invalidPassword ? (
              <label>Please enter a valid password</label>
            ) : null}
          </div>
          <button className="loginform__submit">Login</button>
        </form>
      )}

      {userNotFound ? <label>No user found with those details</label> : null}
    </>
  );
};

export default LoginForm;
