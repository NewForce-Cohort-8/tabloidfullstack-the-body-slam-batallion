import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { deletePost, getPostById } from "../../Managers/PostManager";
// import CommentList from "../Comment/CommentList";




export const PostDetails = () => {
    const [post, setPost] = useState();
    const [showComments, setShowComments] = useState(false);
    const { id } = useParams();
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser)
    const navigate = useNavigate()
    
    /* toggle function for controlling the visibility of the comment list:*/
    const toggleComments = () => {
      setShowComments((prevState) => !prevState);
    };
    
    
  
    useEffect(() => {
      getPostById(id).then(setPost);
    }, []);
  
    if (!post) {
      return null;
    }

    const editButton = () => {
      if (post.userProfileId === tabloidUserObject.id) {
        return <>
        <Button color="warning" onClick={() => navigate(`/posts/edit/${post.id}`)}>Edit</Button>
        </>
    }}

// The delete button is using the window.confirm method. 
// When the button is clicked a confirmation window display will pop up. 
// If yes is clicked the action will happen
// If cancel is clicked then nothing will happen



   const alertClick = () => {
    const confirmBox = window.confirm("Do you really want to delete this post?")
    if (confirmBox === true){
      handleDelete()
    }
      // else (window.confirm("Post not deleted!"))
    }
   



    const handleDelete = () => {
      deletePost(post.id).then(() => {
        navigate(`/my-posts`)
      });
    };


    const deleteButton = () => {
      if (post.userProfileId === tabloidUserObject.id) {
          return <Button color="danger" onClick={ alertClick } className="post-finish">Delete</Button>}

          else {
            return ""
          }}

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
       <CardFooter>
       {deleteButton()}
       {editButton()}
       </CardFooter>
      </CardBody>
      
      {/* <Button><Link to={`/posts/${post.id}/comments`}>Add Comment</Link></Button>
      {showComments && <CommentList />}
      <Button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "View Comments"}
      </Button> */}
       
      <Button
					
					color='dark'
					className='me-2'
					onClick={(e) => {
						e.preventDefault();
						navigate(`/Post/${post.id}/Comments`);
					}}
				>
					Show Comments
				</Button>
    </Card>  
);
};