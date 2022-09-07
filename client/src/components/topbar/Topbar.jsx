import React, { useContext } from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";
import { AuthContex } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContex);
  console.log(user.profilePicture);
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <Link to="/" id="link">
          <span className="logo">Social-Media-App</span>
        </Link>
      </div>

      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="topsearchbar" />
          <input className="searchinput" placeholder="search for friend" />
        </div>
      </div>

      <div className="topbarright">
        <div className="topbarlink"></div>
        <div className="topbarlink"></div>

        <div className="topbaricons">
          <PersonIcon />
          <span className="topbariconbadge">1</span>
        </div>
        <div className="topbaricons">
          <ChatIcon />
          <span className="topbariconbadge">2</span>
        </div>
        <div className="topbaricons">
          <NotificationsActiveIcon />
          <span className="topbariconbadge">1</span>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture} className="topbarimg" />
        </Link>
      </div>
    </div>
  );
}
