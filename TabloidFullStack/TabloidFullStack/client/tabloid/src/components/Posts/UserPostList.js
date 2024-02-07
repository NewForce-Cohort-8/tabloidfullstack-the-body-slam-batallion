import React, { useState, useEffect } from "react";
import { getAllPostsByUserProfile } from "../../Managers/PostManager";
import { Post } from "../Posts/Posts";

const UserPostList = () => {
  const [userPosts, setUserPosts] = useState([]);

  const getPosts = () => {
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser);

    getAllPostsByUserProfile(tabloidUserObject.id)
      .then(allPosts => {
        // Check if allPosts is an array, if not convert it to an array
        const postsArray = Array.isArray(allPosts) ? allPosts : [allPosts];
        setUserPosts(postsArray);
      })
      .catch(error => {
        console.error("Error fetching user posts:", error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {userPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPostList;
