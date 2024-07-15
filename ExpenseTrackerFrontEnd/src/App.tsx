import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import Login from "./Types/LoginType";

const App = () => {
  const handleLogin = (details: Login) => {
    console.log(details);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
