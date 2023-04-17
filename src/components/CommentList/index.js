import React from 'react'
import { comments } from "../../data/blogs.js";
import Comment from "../Comment/index.js";

function CommentList(props) {
  const commentContent = comments.map((comment) => {
    return <Comment author={comment.author} content={comment.content} />;
  });
  return <main id="main">{commentContent}</main>;
}

export default CommentList;
