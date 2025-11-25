import React from "react";
import Back from "../common/back/Back";
import { useHistory } from "react-router-dom";
import TeamCard from "../team/TeamCard";  // ✅ Import TeamCard component
import "./register.css";

const Dashboard = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  if (!user) {
    history.push("/login");
    return null;
  }

  return (
    <>
      <Back title="Dashboard" />
      <div className="dashboard">
        <div className="dashboard-card">
          <h2>Welcome, {user.full_name || "Student"} 👋</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* ✅ Add TeamCard section below user info */}
        <div className="team-section">
          <h3>Our Team</h3>
          <div className="team-container">
            <TeamCard />  {/* This will render the same team cards */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
