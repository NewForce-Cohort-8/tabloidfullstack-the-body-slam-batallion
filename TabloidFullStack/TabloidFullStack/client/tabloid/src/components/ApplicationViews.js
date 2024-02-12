import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import TagList from "./Tag/TagList";
import { AddTag } from "./Tag/AddTag";
import  CategoryList  from "./Categories/CategoryList";
import CategoryForm from "./Categories/CategoryForm";
import { EditTag } from "./Tag/EditTag";
import { PostList } from "./Posts/PostList";
import { PostDetails } from "./Posts/PostDetails";
import { UserPosts } from "./Posts/UserPostList";
import { PostForm } from "./Posts/PostForm";
import { PostEdit } from "./Posts/PostEdit";
import { EditCategory } from "./Categories/CategoryEdit";


export default function ApplicationViews() {
  return (
      <Routes>
             <Route path="/posts/edit/:postId" element={<PostEdit />} />
          <Route path="/posts/add" element={<PostForm />} />
         <Route path="/my-posts" element={<UserPosts/>} />
         <Route path="/posts/:id" element= {<PostDetails/>} />
         <Route path="/posts" element= {<PostList />} />
        <Route path="/" element={<Hello />} />
        <Route path="/tag" element={<TagList/>}/>
        <Route path="tag/add" element={<AddTag/>}/>   
        <Route path="tag/edit/:id" element={<EditTag/>}/>       
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/categories/form" element={<CategoryForm />} />
        <Route path="categories/edit/:id" element={<EditCategory/>}/>       
    </Routes>
  );
}
