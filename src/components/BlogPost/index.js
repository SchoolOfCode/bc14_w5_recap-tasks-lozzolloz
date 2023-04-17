import React from "react";

function BlogPost(props) {
  //Replace the word "test" with your post content!
  return (
    <div id="blog-post">
      <h2>
        {props.datePosted} {props.author}
      </h2>
      <h1>{props.title}</h1>
      <img className="post-image" src={props.imageSrc} alt={props.imageAlt} />
      <p>{props.content}</p>
    </div>
  );
}

export default BlogPost;
