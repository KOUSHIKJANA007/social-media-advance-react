import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import {PostList} from '../store/post-list-store';

const Post = ({ post }) => {

  const {deletePost}=useContext(PostList);

  return (
    <>
      <div className="card post-card">

        <div className="card-body">
          <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
              <FaDeleteLeft />

            </span>

          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) =>
            <span key={tag} className="badge hastag text-bg-success">{tag}</span>
          )}
          <div className="alert alert-success reactions" role="alert">
            This post is reacted by {post.reactions} people
          </div>
        </div>
      </div>
    </>
  )
}

export default Post