import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user);
      try {
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect With Friends</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="text"
              className="loginInput"
              placeholder="User Name"
              required
              ref={username}
            />
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              type="passward"
              className="loginInput"
              placeholder="Passward"
              required
              ref={password}
            />
            <input
              type="passward"
              className="loginInput"
              placeholder="Re-Enter Password"
              required
              ref={passwordAgain}
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/login">
              <button className="loginRegisterButton">Log Into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
