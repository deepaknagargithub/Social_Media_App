import React, { useContext } from "react";
import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContex } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContex);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect With Friends</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input type="email" className="loginInput" required ref={email} />
            <input
              type="password"
              className="loginInput"
              required
              ref={password}
            />
            <button type="" className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "login"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>

            <button className="loginRegisterButton">Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
