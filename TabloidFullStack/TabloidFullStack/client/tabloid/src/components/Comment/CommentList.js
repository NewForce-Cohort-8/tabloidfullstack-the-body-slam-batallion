import { useEffect, useState } from "react";

import { getPostComments } from "../../Managers/CommentManager";
import {  Container, Card, CardBody, CardImg, CardFooter } from "reactstrap";  
import { Comment } from "./Comment";
import { getPostById } from "../../Managers/PostManager";
import { Button } from "reactstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

export const CommentList = () => {
    const navigate = useNavigate();
	const { postId } = useParams();
	const [comments, setComments] = useState([]);
	const [post, setPost] = useState([]);
	const getThisPost = () => {
		return getPostById(postId).then((post) => setPost(post));
	};
	const getComments = () => {
		return getPostComments(postId).then((comments) => setComments(comments));
	};
	useEffect(() => {
		getComments();
		getThisPost();
	}, [postId]);

	return (
        <>
        <Link to={`/posts/${post.id}`}>Back to post</Link>
		
			<Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile?.displayName} </p>
      <p>{post.publishDateTime} </p>
      {post.category?.name}
      <CardImg top src={post.imageLocation} alt={post.title} />
      <CardBody>
        <p>
      
          <strong>{post.title}</strong>
         
        </p>
        <strong>{post.content}</strong>
        <hr></hr>
        <h1>COMMENTS <Button
        color ='dark'
					
					className='add-comment'
					onClick={(e) => {
						e.preventDefault();
						navigate(`/Post/${post.id}/Comments/Add`);
					}}
				>
					Add Comment
				</Button></h1>
       <CardFooter>

       {comments.map((comment) => (
				<Comment comment={comment} postId={postId} key={comment.id} />
			))}
       </CardFooter>
      </CardBody>
    </Card> 
	
        </>);
};