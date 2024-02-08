import { useNavigate } from "react-router-dom";

export const CreatePostButton = () => {
    const navigate = useNavigate(); // convert useNavigate function to variable for easy invoking
    return (// this is the form qith on click to navigate to /create page
      <>
        <form onClick={() => navigate("/post/createpost")} className="createPostButton--Container">
          <button
           
            id="postbuttontextbox"
            className="form-control"
           
            style={{ width: '135px', height: '35px' }}
            required
            autoFocus
          >Create</button>
          
        </form>
      </>
    );
  };