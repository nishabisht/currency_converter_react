import React, { useState } from "react";
import ind from "../../assest/image/ind.png";
import "./Dropdown.css";

const Dropdown = () => {
  const sel_option = [
    { img: ind, option: "USD" },
    { img: ind, option: "EUR" },
    { img: ind, option: "GBP" },
    { img: ind, option: "INR" },
  ];

  const [selectedOption, setSelectedOption] = useState(sel_option[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <span className="dropdown">
      <button
        className="btn btn-white border dropdown-toggle m-2"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption.option}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {sel_option.map((option, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleSelect(option)}
            >
              <img src={option.img} alt="flag" className="flag-icon" />
              {option.option}
            </a>
          </li>
        ))}
      </ul>
    </span>
  );
};

export { Dropdown };
