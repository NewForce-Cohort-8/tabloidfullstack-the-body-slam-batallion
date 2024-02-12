import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";




export const CurrentPost = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.displayName} </p>
      <p>{post.publishDateTime} </p>
      {post.category.name}
      <CardImg top src={post.imageLocation} alt={post.title} />
      <CardBody>
        <p>
      
          <strong>{post.title}</strong>
         
        </p>
        <strong>{post.content}</strong>
       
      </CardBody>
    </Card>
  );
};