import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import Login from "./Types/LoginType";
import { useState } from "react";

const App = () => {
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
      setUserNotFound(false);
    } catch (error) {
      console.log("Incorrect details");
      console.log(error);
      setUserNotFound(true);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                handleLogin={handleLogin}
                userNotFound={userNotFound}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
