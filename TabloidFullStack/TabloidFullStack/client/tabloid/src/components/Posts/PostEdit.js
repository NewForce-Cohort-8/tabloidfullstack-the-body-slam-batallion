import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { deletePost, editPost } from "../../Managers/PostManager";
import { getAllCategories } from "../../Managers/CategoryManager";
import { getPostById } from "../../Managers/PostManager";
import { Button } from "reactstrap";


export const PostEdit = () => 
{
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const { postId } = useParams()

    const getCategories = () => {
        getAllCategories().then(allCategories => setCategories(allCategories));
    }

    useEffect(() => {
        getCategories()
    }, [])




    const [post, update] = useState({
        title: "",
        content:"",
        imageLocation:"",
        createDateTime: Date.now(),
        publishDateTime: Date.now(),
        isApproved: true,
        categoryId: 0,
        userProfileId: tabloidUserObject.id

    })
    
    useEffect(() => {
        getPostById(postId)
        .then((postArray) => {
            update(postArray)
        })
    }, [postId]);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the  button.")

        const postToEdit = {
            Id: parseInt(postId),
            Title: post.title,
            Content: post.content,
            ImageLocation: post.imageLocation,
            // CreateDateTime: new Date().toISOString,
            // PublishDateTime: new Date().toISOString,
            IsApproved: true,
            CategoryId: post.categoryId,
            UserProfileId: tabloidUserObject.id
        }

       return editPost(postToEdit)
        .then(() => {
            navigate("/my-posts")
        })
};


    
        


const selectList = (event) => {
    const copy = {
        ...post
    }
    copy.categoryId = event.target.value
    update(copy)
}

return (
    <div>
    <form className="PostForm">
        <h2 className="postForm__title">New Post</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="Title">Title:</label>
                <input
                    required autoFocus
                    type="text"
                    id="title"
                    value={post.title}
                    onChange={
                        (evt) => {
                            const copy = {...post}
                            copy.title = evt.target.value
                        update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="imageLoction">Image Url:</label>
                <input 
                    required autoFocus
                    type="text"
                    id="imageLocation"
                   
                    value={post.imageLocation}
                    onChange={
                        (evt) => {
                            const copy = {...post}
                            copy.imageLocation = evt.target.value
                        update(copy)
                        }
                    } 
                    
                    />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="content">Content:</label>
                <input
                    required autoFocus
                    type="text"
                    id="content"
                    
                    value={post.content}
                    onChange={
                        (evt) => {
                            const copy = {...post}
                            copy.content = evt.target.value
                        update(copy)
                        }
                    } />
            </div>
        </fieldset>
        {/* dynamic drop down mapping through the categories and allowing the user to select a category when creating a new post form */}
        <fieldset>
                    <div className="form-group">
                        <label htmlFor="category-select">Category</label>
                        <select id="type"
                            value={
                                post.categoryId
                            }
                            onChange={
                                event => selectList(event)
                        }>
                            <option value="0">Select a category</option>
                            {
                            categories.map(category => {
                                return <option value={category.id} key={
                                    category.id
                                }>
                                    {
                                    category.name
                                }</option>
                        })
                        } </select>  
                        </div>
                        </fieldset>
        <button className="btn btn-primary"
        onClick={ 
            (clickEvent) => handleSaveButtonClick(clickEvent)
        }>
            Submit Post
        </button>
    </form>
</div>)
}