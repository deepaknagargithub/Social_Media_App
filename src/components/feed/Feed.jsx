import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../dummyData";

export default function feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />

        {Posts.map((post) => (
          <Post key={post.id} props={post} />
        ))}
      </div>
    </div>
  );
}
