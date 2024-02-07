import React from "react";

const baseUrl = 'https://localhost:5001/api/post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};


export const getPost = (id) => {
  return fetch(`https://localhost:5001/api/post/${id}`).then((res) => res.json());
};


export const getAllPostsByUserProfile = (userId) => {
  const url = `https://localhost:5001/api/post/userProfile/${userId}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error fetching user posts:", error);
      throw error; // Rethrow the error to handle it in the calling code
    });
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