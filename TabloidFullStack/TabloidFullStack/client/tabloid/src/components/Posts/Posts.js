import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem} from "reactstrap";


export const Post = ({ post }) => {

    return (
      <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.displayName} </p>
      <p>{post.publishDateTime} </p>
      {post.category.name}
      <CardBody>
        <p>
      
          <strong>{post.title}</strong>
         
        </p>
        <strong>{post.content}</strong>
        <br></br>
        <Link to={`/posts/${post.id}`}>
    <strong>details</strong>
</Link>
      </CardBody>
    </Card>
        
      );
};