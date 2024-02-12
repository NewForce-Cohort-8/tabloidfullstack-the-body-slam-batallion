import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";

import TagList from "./Tag/TagList";
import PostList from "../components/Posts/PostList";
import { PostForm } from "./Posts/PostForm";
import UserPostList from "./Posts/UserPostList";
import { PostDetails } from "./Posts/PostDetails";
import { AddTag } from "./Tag/AddTag";
import  CategoryList  from "./Categories/CategoryList";
import CategoryForm from "./Categories/CategoryForm";
import { EditTag } from "./Tag/EditTag";
import { EditCategory } from "./Categories/CategoryEdit";


export default function ApplicationViews() {
  return (
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/tag" element={<TagList/>}/>
        <Route path="tag/add" element={<AddTag/>}/>   
        <Route path="tag/edit/:id" element={<EditTag/>}/>       
        <Route path="/posts" element= {<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/myposts" element= {<UserPostList />} />
        <Route path="/post/createpost" element= {<PostForm />} />
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/categories/form" element={<CategoryForm />} />
        <Route path="categories/edit/:id" element={<EditCategory/>}/>       
    </Routes>
  );
}
