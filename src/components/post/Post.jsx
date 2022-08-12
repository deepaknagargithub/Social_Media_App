import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { Users } from "../dummyData";

export default function Post(props) {
  const [like, setLike] = useState(props.props.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    console.log("hey");
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img
              className="postprofileimg"
              src={
                Users.filter((u) => u.id === props.props.userId)[0]
                  .profilePicture
              }
              alt="deepak"
            />
            <span className="postusername">
              {Users.filter((u) => u.id === props.props.userId)[0].username}
            </span>
            <span className="postdate">{props.props.date}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{props.props.desc}</span>
          <img className="postimg" src={props.props.photo} alt="" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <ThumbUpIcon className="likeicon" onClick={handleLike} />
            <FavoriteIcon />
            <span className="postlikecounter">{like}</span>
          </div>
          <div className="postbottomright">
            <CommentIcon />
            <span className="commentcount">{props.props.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
