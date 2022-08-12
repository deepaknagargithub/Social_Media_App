import React from "react";
import "./profile.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import Feed from "../feed/Feed";
export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/7.webp" className="profileCoverImg" />
              <img src="assets/post/1.webp" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Aniket</h4>
              <span className="profileInfoDesc">Hey Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}
