// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";
import Post from "../PostsContainer/Post";

const CommentSection = props => {
  // Add state for the comments'
const [comment] = useState(props.comments)


  return (
    <div>
      {/* map through the comments data and return the Comment component */}

    {comment.map(item => (
            <Comment key={item.id} user={item.username} comment={item}/>
          ))}
      
      <CommentInput />
    </div>
  );
};


export default CommentSection;
