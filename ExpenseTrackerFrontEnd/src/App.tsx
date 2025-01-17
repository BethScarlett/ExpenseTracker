import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Login from "./Types/LoginType";
import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import Transaction from "./Types/TransactionType";
import CreateAccountPage from "./Pages/CreateAccountPage/CreateAccountPage";
import Account from "./Types/AccountType";
import ForgottenPasswordPage from "./Pages/ForgottenPasswordPage/ForgottenPasswordPage";

const App = () => {
  const [userFound, setUserFound] = useState<boolean>(false);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const [existingUser, setExistingUser] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleLogin = async (details: Login) => {
    try {
      const response = await fetch("http://localhost:8080/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const result = await response.json();
      setTransactions(result);
      setUserFound(true);
    } catch (error) {
      console.log("Incorrect details");
      setUserNotFound(true);
      console.log(error);
    }
  };

  const handleCreateAccount = async (details: Account) => {
    try {
      const response = await fetch("http://localhost:8080/create", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const result = await response.json();
      console.log(result);
      const login: Login = {
        email: details.email,
        password: details.password,
      };
      handleLogin(login);
    } catch (error) {
      setExistingUser(true);
    }
  };

  const handleLogout = () => {
    setUserFound(false);
    handleReset();
  };

  const handleReset = () => {
    setUserFound(false);
    setUserNotFound(false);
    setExistingUser(false);
    setTransactions([]);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              userFound ? (
                <Navigate replace to="/home" />
              ) : (
                <LoginPage
                  handleLogin={handleLogin}
                  userNotFound={userNotFound}
                />
              )
            }
          />
          <Route
            path="/create"
            element={
              userFound ? (
                <Navigate replace to="/home" />
              ) : (
                <CreateAccountPage
                  handleCreateAccount={handleCreateAccount}
                  existingUser={existingUser}
                  handleReset={handleReset}
                />
              )
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                transactions={transactions}
                handleLogout={handleLogout}
              />
            }
          />
          <Route
            path="/forgotten+password"
            element={<ForgottenPasswordPage handleReset={handleReset} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
