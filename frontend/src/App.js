import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import Leaderboard from "./Components/Leaderboard";
import { About } from "./Components/About/About";
import Rewards from "./Components/Rewards";
import { Profile } from "./Components/Profile/Profile";
import { Header } from "antd/es/layout/layout";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    if (!!userData) {
      try {
        login(JSON.parse(userData));
      } catch (e) {
        console.error("Could not restore session!");
      }
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1 className="home-page-heading">Campus Quest</h1>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
