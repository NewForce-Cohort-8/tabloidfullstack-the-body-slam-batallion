import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getPost } from "../../Managers/PostManager";
import { useParams } from "react-router-dom";
import { Post } from "../Posts/Posts"; // Assuming you have a Post component for displaying individual posts

export const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
    });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Post post={post} />
        </div>
      </div>
    </div>
  );
};
