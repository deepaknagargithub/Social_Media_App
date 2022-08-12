import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect With Friends</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="email"
              className="loginInput"
              style={{ height: "500px" }}
            />
            <input type="passward" className="loginInput" />
            <button type="" className="loginButton">
              Login
            </button>
            <span className="loginForgot">Forgot Password?</span>

            <button className="loginRegisterButton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
