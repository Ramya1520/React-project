import React from 'react';
function formatDate(date) {
  return date.toLocaleDateString();
}
function Comment() {
  return (
    <div>
      <div ><img src={comment.user.avatarUrl} alt={comment.user.name} />
        <div >{comment.user.name}</div>
      </div>
      <div >{comment.text}</div>
      <div>{formatDate(comment.date)}</div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'This is my web page',
  user: {
    name: 'Ram',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
export default Comment;

