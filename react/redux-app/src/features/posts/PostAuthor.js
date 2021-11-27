import React from "react";
import { useSelector } from 'react-redux';

const PostAuthor = ({ userId }) => {
  const users = useSelector(state => state.users);
  const author = users.find((user) => user.id === userId);
  return <span>by <strong>{author? author.name : 'Unknown author'}</strong></span>;
}

export default PostAuthor;