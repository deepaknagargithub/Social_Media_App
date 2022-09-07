import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ChatIcon from "@mui/icons-material/Chat";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeedIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <SmartDisplayIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Videos</span>
          </li>
          <li className="sidebarlistitem">
            <BookmarkIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Bookmark</span>
          </li>
          <li className="sidebarlistitem">
            <GroupIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Group</span>
          </li>
          <li className="sidebarlistitem">
            <QuestionMarkIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Question</span>
          </li>
          <li className="sidebarlistitem">
            <ChatIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Question</span>
          </li>
          <li className="sidebarlistitem">
            <WorkIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">job</span>
          </li>
          <li className="sidebarlistitem">
            <SchoolIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Courses</span>
          </li>
          <li className="sidebarlistitem">
            <EventIcon className="sidebaritem" />
            <span className="sidebarlistitemtext">Event</span>
          </li>
          <button className="sidebarbutton">Show More</button>
        </ul>

        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
