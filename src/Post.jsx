import React from 'react';

import "./Post.css";

function Post(){
  return(
    <div className="post-box">
      <div className="profileDetails">
        <div className="avater"></div>
        <h4>Allen Dodul</h4>
      </div>
      <img className="postImage" src="https://i.ibb.co/CP04vsf/images-63.jpg" alt="images-63" border="0"/>
      <h5><strong>Name</strong> Caption</h5>
    </div>
  )
}

export default Post;