import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Topbar() {
  return (

    <div className="topbarcontainer">

      <div className="topbarleft">
        <span className="logo">Social-Media-App</span>
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
        <img src="/assets/2.jpg" className="topbarimg" />
      </div>
    </div>
  );
}
