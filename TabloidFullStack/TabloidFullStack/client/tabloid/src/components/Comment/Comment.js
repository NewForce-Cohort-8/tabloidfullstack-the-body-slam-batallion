import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	Card,
	CardBody,
	CardHeader,
	CardText,
	CardTitle,
	Col,
	Row,
} from "reactstrap";
import { DeleteCommentsById } from "../../Managers/CommentManager";

export const Comment = ({ comment, postId }) => {
	const [date] = comment.createDateTime.split("T");
	const [year, month, day] = date.split("-");
	const formattedDate = `${month}/${day}/${year}`;
	const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser);
	const navigate = useNavigate();

	const alertClick = () => {
		const confirmBox = window.confirm("Do you really want to delete this comment?")
		if (confirmBox === true){
		  handleCommentDelete()
		}
		  // else (window.confirm("Post not deleted!"))
		}

	const handleCommentDelete = () => {
		DeleteCommentsById(comment.id).then(() => {
		  navigate(`/Posts`)
		});
	  };
	  const deleteButton = () => {
		if (comment.userProfileId === tabloidUserObject.id) {
			return <button color="danger" onClick={ alertClick } className="comment-finish">Delete</button>}
  
			else {
			  return ""
			}}
	// const handleNavigate = (e) => {
	// 	e.preventDefault();
	// 	const [, commentId] = e.target.id.split("--");
	// 	if (e.target.id.startsWith("delete-Comment")) {
	// 		navigate(`/post/${postId}/Comments/Delete/${commentId}`);
	// 	}
	// 	if (e.target.id.startsWith("edit-comment")) {
	// 		navigate(`/post/${postId}/Comments/Edit/${commentId}`);
	// 	}
	// };
	return (
		<Card className='mb-4'>
			<CardHeader>
				<Row>
					<Col>{comment?.userProfile?.displayName}</Col>
					<Col className='text-end'>{formattedDate}</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<CardTitle tag='h5'>{comment.subject}</CardTitle>
				<CardText>{comment.content}</CardText>
			</CardBody>
			{deleteButton()}
			{/* {user.id == comment.userProfileId ? (
				<CardFooter className='d-flex justify-content-end'>
					<Button
						id={`edit-comment--${comment.id}`}
						onClick={(e) => handleNavigate(e)}
						className='me-2'
					>
						Edit
					</Button>
					<Button
						color='danger'
						id={`delete-comment--${comment.id}`}
						onClick={(e) => handleNavigate(e)}
					>
						Delete
					</Button>
				</CardFooter>
			) : (
				""
			)} */}
		</Card>
	);
};