import React from "react";
import BlogPost from "../BlogPost/index";
import { blog } from "../../data/blogs";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

function App() {
  return (
    <div>
      <BlogPost
        title={blog.title}
        author={blog.author}
        datePosted={blog.datePosted}
        content={blog.content}
        imageSrc={blog.imageSrc}
        imageAlt={blog.imageAlt}
      />
      <CommentList />
      <CommentForm />
    </div>
  );
}
export default App;
