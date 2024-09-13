import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home"; // Adjust the import path accordingly
import { Login } from "../Login/Login"; // Adjust the import path accordingly
import { Logout } from "../Logout/Logout"; // Adjust the import path accordingly

const RouterMain = () => {
  return (
    <div>
      <header>
        <Logout />
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export { RouterMain };
