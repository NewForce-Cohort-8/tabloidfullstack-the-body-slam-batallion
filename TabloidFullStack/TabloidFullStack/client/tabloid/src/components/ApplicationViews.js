import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import PostList from "../components/Posts/PostList";
import TagList from "./TagList";
import { CategoryList } from "./CategoryList";
import { PostForm } from "./Posts/PostForm";
import UserPostList from "./Posts/UserPostList";
import { PostDetails } from "./Posts/PostDetails";


export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/tag" element={<TagList/>}/>
        
        <Route path="/posts" element= {<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/myposts" element= {<UserPostList />} />
        <Route path="/post/createpost" element= {<PostForm />} />
        <Route path="/categories" element={<CategoryList/>} />
      </Routes>
   );
 
}