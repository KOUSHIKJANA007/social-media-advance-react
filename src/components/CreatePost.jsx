import React, { useContext, useRef } from 'react'
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const {addPost}=useContext(PostList);
  const userIdElement=useRef();
  const postTitleElement =useRef();
  const postBodyElement =useRef();
  const reactionsElement =useRef();
  const tagsElement =useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    addPost(userId,postTitle,postBody,reactions,tags);
  }
  return (
    <>
      <form className='create-post' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input ref={userIdElement} type="text" placeholder='Enter your user id' className="form-control" id="userId" aria-describedby="userIdHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input ref={postTitleElement} type="text" placeholder='Give a title for your post...' className="form-control" id="title" aria-describedby="titleHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea ref={postBodyElement} rows={4} type="text" placeholder='Give your post description' className="form-control" id="body" aria-describedby="bodyHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="rections" className="form-label">Reactions</label>
          <input ref={reactionsElement} type="text" placeholder='Give a reaction for your post...' className="form-control" id="rections" aria-describedby="rectionsHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags</label>
          <input ref={tagsElement} type="text" placeholder='Give tags for your post with space ' className="form-control" id="tags" aria-describedby="tagsHelp" />
        </div>
        <button type="submit" className="btn btn-success">Post</button>
      </form>
    </>
  )
}

export default CreatePost