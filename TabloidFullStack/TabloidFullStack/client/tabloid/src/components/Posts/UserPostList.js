import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row, Table } from "reactstrap";
import { getUserPosts } from "../../Managers/PostManager";
import { Post } from "./Posts";



export const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);

    // This gets the current user
    const localTabloidUser = localStorage.getItem("userProfile")
    const tabloidUserObject = JSON.parse(localTabloidUser)


    useEffect(() => {
        getUserPosts(tabloidUserObject.id)
        .then((data) => {
            setUserPosts(data)
        })
        .catch((error) => {
            console.log("Can't fetch user posts:" , error)
        });
    }, [tabloidUserObject.id] );

    return (<>
        <div className="post-list">
          <div className="row justify-content-center">
            <div className="cards-column">
              
              {userPosts.map((post) => {
                return  <Post key={post.id} post={post} />
              })}
              
            </div>
          </div>
        </div>
  
      </>)
}