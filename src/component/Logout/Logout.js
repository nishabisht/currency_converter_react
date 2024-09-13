import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage or cookies
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export { Logout };
