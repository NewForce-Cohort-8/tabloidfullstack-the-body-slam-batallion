import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../Managers/PostManager";
import { Post } from "../Posts/Posts.js";
import { CreatePostButton } from "../Posts/PostButton.js"
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 
  return (<>
  
          <CreatePostButton />
        
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  </>);
};

export default PostList;