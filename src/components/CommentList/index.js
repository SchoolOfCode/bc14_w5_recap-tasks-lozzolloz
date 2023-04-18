import { comments } from "../../data/blogs";
import Comment from "../Comment";

function CommentList() {
  const commentItems = comments.map((item) => {
    return (
      <Comment key={item.id} author={item.author} content={item.content} />
    );
  });
  return <div>{commentItems}</div>;
}

export default CommentList;