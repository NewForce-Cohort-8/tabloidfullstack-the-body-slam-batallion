import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";



export const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.displayName} </p>
      <p>{post.publishDateTime} {post.category.name}</p>
      <CardImg top src={post.imageLocation} alt={post.title} />
      <CardBody>
        <p>
      
          <strong>{post.title}</strong>
         
        </p>
        <strong>{post.content}</strong>
        <Link to={`/posts/${post.id}`}>
    <strong>details</strong>
</Link>
      </CardBody>
    </Card>
  );
};