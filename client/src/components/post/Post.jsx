import React, { useState, useEffect } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../../context/AuthContext";
// import { post } from "../../../../api/routes/users";
// import { Users } from "../dummyData";

export default function Post({ post }) {
  const { user: currentUser } = useContext(AuthContex);
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(pf);
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id]);

  const handleLike = async () => {
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postprofileimg"
                src={user.profilePicture || pf + "profile.jpg"}
                alt="deepak"
              />
            </Link>

            <span className="postusername">{user.username}</span>
            <span className="postdate">{format(post.date)}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post.desc}</span>
          <img className="postimg" src={post.img} alt="" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <ThumbUpIcon className="likeicon" onClick={handleLike} />
            <FavoriteIcon />
            <span className="postlikecounter">{like}</span>
          </div>
          <div className="postbottomright">
            <CommentIcon />
            <span className="commentcount">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
