import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Link is used for navigation in React Router
import "./NavBar.css";
import { Button } from "antd";
import { AuthContext } from "../../context/AuthContext";
import apiClient from "../../Clients/apiClient";
export const Navbar = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <nav style={{ background: "#333", padding: "1rem" }}>
      <div>
        {/* <p style={{ display: "flex" }}>Campus Quest - MNNIT </p> */}
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About Campus
            </Link>
          </li>
          <li>
            <Link
              to="/rewards"
              style={{ color: "white", textDecoration: "none" }}
            >
              Rewards
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              style={{ color: "white", textDecoration: "none" }}
            >
              Profile
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Button
                type="primary"
                style={{ margin: "0", background: "#707070" }}
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    const res = await apiClient.get("/auth/logout");
                    if (res.status == 200) {
                      logout();
                      navigate("/");
                      localStorage.clear();
                    }
                  } catch (e) {
                    console.log("Could not logout!");
                  }
                }}
              >
                Logout
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
