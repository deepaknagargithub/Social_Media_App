import React from "react";
import "./closeFriend.css";

export default function CloseFriend(props) {
  const user = props.user;
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarfriend">
      <img className="sidebarfriendimg" src={pf+user.profilePicture} alt="" />
      <span className="sidebarfriendname">{user.username}</span>
    </li>
  );
}
