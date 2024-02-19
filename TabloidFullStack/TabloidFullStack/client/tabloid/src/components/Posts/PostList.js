import { useEffect, useState } from "react"
import { getAllPosts } from "../../Managers/PostManager";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Post } from "./Posts";

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    }

    useEffect(() => {
        getPosts();
    }, [])

    
   
    return (<>
    <Button
            onClick={() => navigate("/posts/add")}
            color="primary"
            
            className="btn btn-primary">
                Create Post
            </Button>
      <div className="post-list">
        <div className="row justify-content-center">
          <div className="cards-column">
            
              {posts.map((post) => {
               
                return  <Post post={post} />
              })}
            
          </div>
        </div>
      </div>
    
    </>
    )
}