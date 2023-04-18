import React from "react";

export default function BlogPost(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>
        <i>by {props.author}</i>
      </h2>
      <p>{props.datePosted}</p>
      <img src={props.imageSrc} alt={props.imageAlt} />
      <p>
        <i>{props.imageAlt}</i>
      </p>
      <p>{props.content}</p>
    </div>
  );
}
