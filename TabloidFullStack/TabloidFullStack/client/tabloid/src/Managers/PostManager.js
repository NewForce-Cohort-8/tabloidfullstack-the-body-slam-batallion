import React from "react";

const baseUrl = 'https://localhost:5001/api/post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};
export const getPost = (id) => {
  return fetch(`/api/post/${id}`).then((res) => res.json());
};
export const getAllPostsByUserProfile = (id) => {
  return fetch(`https://localhost:5001/api/post/${id}`)
    .then((res) => {
      console.log("Response:", res); // Log the response object
      return res.json(); // Parse the JSON response
    })
    .then((data) => {
      console.log("Data:", data); // Log the parsed data
      return data; // Return the parsed data
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