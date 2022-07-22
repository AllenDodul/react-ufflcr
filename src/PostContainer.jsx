import React from 'react';

import "./PostContainer";
import Post from "./Post.jsx";


function PostContainer(){
  return(
    <div className="PostContainer">
      <Post/>
      <Post/>
    </div>
  )
}

export default PostContainer;