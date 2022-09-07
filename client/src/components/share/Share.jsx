import React, { useContext } from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { AuthContex } from "../../context/AuthContext";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContex);
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts/create", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img
            className="shareprofileimg"
            src={user.profilePicture || pf + "profile.jpg"}
            alt=""
          />
          <input
            className="shareinput"
            type="text"
            name="post"
            placeholder={"what's in your mind" + " " + user.username + "?"}
            ref={desc}
          />
        </div>
        <hr className="sharehr" />
        <form className="sharebottom" onSubmit={submitHandler}>
          <div className="shareoptions">
            <label htmlFor="file" className="shareoption">
              <PermMediaIcon htmlColor="tomato" className="shareicon" />
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="sharebutton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
