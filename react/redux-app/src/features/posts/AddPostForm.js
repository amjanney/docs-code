import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if(title && content) {
      dispatch(postAdded({
        id: nanoid(),
        title,
        content
      }))
      setTitle('')
      setContent('')
    }
  }
  return (
    <section>
      <h2>添加新帖子</h2>
      <form>
        <h2 htmlFor="postTitle">Post Title:</h2>
        <span className="input-affix-wrapper">
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </span>
        <h2 htmlFor="postContent">Content:</h2>
        <span className="input-affix-wrapper">
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </span>
        <button className="button" type="button" onClick={onSavePostClicked}>保存帖子</button>
      </form>
    </section>
  )
}