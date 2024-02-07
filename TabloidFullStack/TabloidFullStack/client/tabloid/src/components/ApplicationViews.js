import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import TagList from "./Tag/TagList";
import PostList from "../components/Posts/PostList";
import { CategoryList } from "./CategoryList";
import { AddTag } from "./Tag/AddTag";



export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/tag" element={<TagList/>}/>
        <Route path="tag/add" element={<AddTag/>}/>
        
        <Route path="/posts" element= {<PostList />} />
        
        <Route path="/categories" element={<CategoryList/>} />
      </Routes>
   );
 
}