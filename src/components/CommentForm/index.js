import React from "react";
import { useState } from "react";
import { comments } from "../../data/blogs";

function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function onSubmit() {
   comments = [
      ...comments,
      { id: comments.length, author: { name }, content: { comment } },
    ];
  }

  return (
    <div>
      <input id="name" onChange={handleNameChange}></input>
      <input id="comment" onChange={handleCommentChange}></input>
      <button onClick={onSubmit()}>Submit</button>
    </div>
  );
}

export default CommentForm;