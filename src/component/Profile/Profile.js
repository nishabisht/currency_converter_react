import React from "react";
import "./Profile.css";
import profile from "../../assest/image/profile.png";
import visa from "../../assest/image/visa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faDumpster,
  faEllipsis,
  faLockOpen,
  faPencil,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="row my-3 ">
        <div className="col text-center py-2">
          <img src={profile} alt="profile" />
          <h5>Todd Anderson</h5>
          <div className="border-bottom">todd.anderson@hotmail.com</div>
        </div>
      </div>

      <div className="row ">
        <div className="col m-3">
          <h7 className="col text-muted text-center my-5">
            TODAY'S VOLUMN
            <span className="text-center ms-3">
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </h7>

          <div className="theme-text-color font-weight-bold text-center ">
            <FontAwesomeIcon icon={faAdd} />
            <span className="p-3"> 1840.0(1064%)</span>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col text-center">
          <div className="fs-5 text-muted my-2">
            <FontAwesomeIcon icon={faLockOpen} /> add phone number to unlock
            feature
          </div>
          <img src={visa} alt="visa card" className="mt-3" />
        </div>
      </div>
      <div className="row ">
        <div className="col col-lg-5 fs-bold mx-3 text-muted text-center">
          ACTIONS
        </div>
        <div className="col col-lg-6 me-2 text-center">
          <span className="p-2 mx-1 border rounded-circle">
            <FontAwesomeIcon icon={faPencil} />
          </span>
          <span className="p-2 mx-1 border rounded-circle">
            <FontAwesomeIcon icon={faShare} />
          </span>
          <span className="p-2 mx-1 border rounded-circle">
            <FontAwesomeIcon icon={faDumpster} />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Profile };
