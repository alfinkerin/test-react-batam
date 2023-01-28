import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token === null || token === undefined || token === "") {
      navigate("/login");
    }
  });
  return <div>Dashboard</div>;
}

export default Dashboard;
