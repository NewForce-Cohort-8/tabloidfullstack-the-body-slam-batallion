import React from "react";

//use exact URL location in baseUrl ----> 5001 in this case
const baseUrl = 'https://localhost:5001/api/Category';

export const getAllCategories = () => {
  return fetch(baseUrl) 
  .then((res) => {
    return res.json();
  })
};


//saving this add function for later
//nothing to see here
/*export const addPost = (singlePost) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
}; */