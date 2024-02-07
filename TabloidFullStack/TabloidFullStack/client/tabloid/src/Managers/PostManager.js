import React from "react";

const baseUrl = 'https://localhost:5001/api/post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};
export const getAllPostsByUserProfile = (id) => {
  return fetch(`https://localhost:5001/api/Post/${id}`)
    .then((res) => res.json())
};
export const addPost = (singlePost) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};