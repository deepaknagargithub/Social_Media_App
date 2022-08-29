import React from "react";

import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect With Friends</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="User Name" />
            <input type="email" className="loginInput" placeholder="Email" />
            <input
              type="passward"
              className="loginInput"
              placeholder="Passward"
            />
            <input
              type="passward"
              className="loginInput"
              placeholder="Re-Enter Password"
            />
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
