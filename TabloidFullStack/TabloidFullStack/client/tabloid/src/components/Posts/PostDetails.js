import React, { useEffect, useState } from "react";
import { getPost } from "../../Managers/PostManager";
import { useParams } from "react-router-dom";
import { CurrentPost } from "./CurrentPost";
import { Link } from "react-router-dom";


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
          <CurrentPost post={post} />
          <Link to={`/myposts`}>Go Back To MyPosts </Link>
        </div>
      </div>
    </div>
  );
};
