import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import PostList from "../components/Posts/PostList";
import TagList from "./TagList";
import  CategoryList  from "./Categories/CategoryList";

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/tag" element={<TagList />} />

      <Route path="/posts" element={<PostList />} />

      <Route path="/categories" element={<CategoryList />} />
    </Routes>
  );
}
