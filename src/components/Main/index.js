import React from "react";
import { blog } from "../../data/blogs.js";
import BlogPost from "../BlogPost/index.js";

function Main(props) {
  const blogContent = blog.map((post) => {
    return (
      <BlogPost
        datePosted={post.datePosted}
        author={post.author}
        title={post.title}
        content={post.content}
        imageSrc={post.imageSrc}
        imageAlt={post.imageAlt}
      />
    );
  });
  return <main id="main">{blogContent}</main>;
}

export default Main;
