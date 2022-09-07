import React, { useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContex } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setposts] = useState([]);
  const { user } = useContext(AuthContex);
  console.log(user._id);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + `${user._id}`);
      setposts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
