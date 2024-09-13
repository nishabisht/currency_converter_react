import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicNav } from "../Nav/PublicNav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    localStorage.setItem("authToken", "your-auth-token");
    // Redirect to home page or another route after login
    navigate("/");
  };

  return (
    <>
      <div className="d-flex">
        <PublicNav />
      </div>
      <div className="row justify-content-center">
        <div className="col col-lg-4">
          <form
            onSubmit={handleLogin}
            className="d-flex flex-column border m-2 p-3 rounded"
          >
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="check" />
              <label className="form-check-label" htmlFor="check">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { Login };
