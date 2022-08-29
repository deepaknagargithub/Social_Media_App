import React from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function share() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img className="shareprofileimg" src={`${pf}/2.jpg`} alt="" />
          <input
            className="shareinput"
            type="text"
            name="post"
            placeholder="what's in your mind"
          />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shareoptions">
            <div className="shareoption">
              <PermMediaIcon htmlColor="tomato" className="shareicon" />
            </div>
            <div className="shareoption">
              <LabelIcon htmlColor="blue" className="shareicon" />
            </div>
            <div className="shareoption">
              <LocationOnIcon htmlColor="green" className="shareicon" />
            </div>
            <div className="shareoption">
              <AddReactionIcon htmlColor="goldenrod" className="shareicon" />
            </div>
          </div>
          <button className="sharebutton" type="">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
