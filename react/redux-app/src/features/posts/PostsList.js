import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

export const PostsList = () => {
  const orderedPosts = useSelector(state => state.posts)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date)); // 时间从大到小排序
  
  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
      </article>
    )
  })
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}