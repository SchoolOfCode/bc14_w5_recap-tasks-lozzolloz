function Comment(props) {
  function getInitials(author) {
    let nameSplit = author.split(" ");
    console.log(nameSplit);
    let initials = "";
    for (let i = 0; i < nameSplit.length; i++) {
      initials = initials + nameSplit[i].charAt(0);
    }
    return initials;
  }

  return (
    <div>
      <h3>{getInitials(props.author)}</h3>
      <h2>{props.author}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Comment;
