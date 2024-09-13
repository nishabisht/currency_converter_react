import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../assest/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons";
import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const VerticalNav = () => {
  return (
    <React.Fragment>
      <ul className="nav flex-column gap-5 mt-5 ms-3">
        <li className="nav-item">
          <NavLink className="nav-link color-black" to="#">
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <span className="h4 ps-2">Xchange</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link color-black " to="/">
            <span className="px-2">
              <FontAwesomeIcon icon={faDashboard} />
            </span>
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link color-black" to="/profile">
            <span className="px-2">
              <FontAwesomeIcon icon={faPersonDotsFromLine} />
            </span>
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link color-black" to="/converter">
            <span className="px-2">
              <FontAwesomeIcon icon={faExchange} />
            </span>
            Currency Converter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  color-black" to="/">
            <span className="px-2">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
            Logout
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export { VerticalNav };
