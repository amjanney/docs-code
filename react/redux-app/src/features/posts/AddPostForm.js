import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice';

export const AddPostForm = () => {

  // 变量
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setuserId] = useState('')
  const users = useSelector(state => state.users);
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  // 方法
  const dispatch = useDispatch()  
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setuserId(e.target.value)

  const onSavePostClicked = () => {
    if(title && content && userId) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }
  // UI
  const useOptions = users.map(user => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select value={userId} id="postAuthor" onChange={onAuthorChanged}>
          <option value=""></option>
          {useOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button className="button" type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  )
}