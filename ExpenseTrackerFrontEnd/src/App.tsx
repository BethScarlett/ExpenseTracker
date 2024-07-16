import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Login from "./Types/LoginType";
import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  const [userFound, setUserFound] = useState<boolean>(false);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

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
      console.log(result);
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
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
