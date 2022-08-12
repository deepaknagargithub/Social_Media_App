import React from "react";
import "./closeFriend.css";

export default function CloseFriend(props) {
  const user = props.user;
  console.log(user);
  return (
    <li className="sidebarfriend">
      <img className="sidebarfriendimg" src={user.profilePicture} alt="" />
      <span className="sidebarfriendname">{user.username}</span>
    </li>
  );
}
