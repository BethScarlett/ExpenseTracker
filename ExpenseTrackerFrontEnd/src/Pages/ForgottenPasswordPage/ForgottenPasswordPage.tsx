import { Link, Navigate } from "react-router-dom";
import "./ForgottenPasswordPage.scss";
import { FormEvent, useState } from "react";
import Account from "../../Types/AccountType";

const ForgottenPasswordPage = () => {
  const [user, setUser] = useState<Account>({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [userFound, setUserFound] = useState<boolean>();
  const [noUserFound, setNoUserFound] = useState<boolean>();

  const handleFindUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/find", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const result = await response.json();
      console.log(result);

      setUser(result);
      setUserFound(true);
    } catch (error) {
      console.log(error);

      setNoUserFound(true);
    }
  };

  const handleUpdateAccount = async (details: Account) => {
    try {
      const response = await fetch("http://localhost:8080/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const result = await response.json();
      console.log(result);
      //TODO - This currently doesn't navigate when user resets password.
      //TODO - Set a message to display when user has reset password successfully
      //TODO - Add guard clause to stop updated password being blank
      <Navigate replace to="/" />;
    } catch (error) {}
  };

  const handleFindSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFindUser();
  };

  const handleUpdateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUser: Account = {
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      password: newPassword,
    };
    handleUpdateAccount(updatedUser);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (!userFound) {
      setEmail(value);
    } else {
      setNewPassword(value);
    }
  };

  return (
    <div className="frgtn-pass-form">
      {noUserFound ? <label>No user found with that email</label> : null}
      <div>
        {userFound ? (
          <form onSubmit={handleUpdateSubmit}>
            <label htmlFor="password">Enter your new password: </label>
            <input
              type="text"
              name="password"
              value={newPassword}
              onChange={handleChange}
            />
            <button>Send</button>
          </form>
        ) : (
          <form onSubmit={handleFindSubmit}>
            <label htmlFor="email">Enter your email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <button>Send</button>
          </form>
        )}
      </div>
      {/* TODO - Fix no user found message may still being present if procked before going to this page */}
      <Link
        to={"/"}
        className="frgtn-pass-form__link frgtn-pass-form__link--hover"
      >
        Back to login
      </Link>
    </div>
  );
};

export default ForgottenPasswordPage;
