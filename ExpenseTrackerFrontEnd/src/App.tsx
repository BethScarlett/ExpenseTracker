import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Login from "./Types/LoginType";
import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import Transaction from "./Types/TransactionType";
import CreateAccountPage from "./Pages/CreateAccountPage/CreateAccountPage";

const App = () => {
  const [userFound, setUserFound] = useState<boolean>(false);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
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
          <Route path="/create" element={<CreateAccountPage />} />
          <Route
            path="/home"
            element={<HomePage transactions={transactions} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
