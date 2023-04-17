import React from "react";

function Comment(props) {
  return (
    <>
      <h3>
        {props.initials}
        {props.author}
      </h3>
      <p>{props.content}</p>
    </>
  );
}

export default Comment;
