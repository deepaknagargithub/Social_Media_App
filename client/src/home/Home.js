import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Feed from "../components/feed/Feed";
import "./home.css";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import Register from "../components/register/Register";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
