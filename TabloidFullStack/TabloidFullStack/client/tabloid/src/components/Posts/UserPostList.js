import React, { useState, useEffect } from "react";
import { getAllPostsByUserProfile } from "../../Managers/PostManager";
import { Post } from "./Posts";

const UserPostList = () => {
  const [userPosts, setUserPosts] = useState([]);

  const getPosts = () => {
    const localTabloidUser = localStorage.getItem("userProfile");
	const tabloidUserObject = JSON.parse(localTabloidUser);

    getAllPostsByUserProfile(tabloidUserObject.id).then(allPosts => setUserPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {userPosts.map((post) => (
            <Post key={post.id} post={post}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPostList;