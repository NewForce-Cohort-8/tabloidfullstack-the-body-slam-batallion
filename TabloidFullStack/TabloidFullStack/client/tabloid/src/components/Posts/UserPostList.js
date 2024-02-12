import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { getAllPostsByUserProfile, deletePost} from "../../Managers/PostManager";
import { Post } from "../Posts/Posts";
import { useNavigate } from "react-router-dom";



const UserPostList = () => {
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();


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
  const deletePostById = (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      deletePost(postId)
        .then(() => {
          // After successful deletion, filter out the deleted post from the userPosts array
          setUserPosts(userPosts.filter(post => post.id !== postId));
          navigate('/posts');
        })
        .catch(error => {
          console.error("Error deleting post:", error);
        });
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
    <div className=" justify-content-center">
      {userPosts.map((post) => (
        <div key={post.id} className="col-md-10 mb-4">
          <Card>
            <div className="card-body">
              <Post post={post} />
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button color="danger" onClick={() => deletePostById(post.id)}>Delete</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
);
};

export default UserPostList;
