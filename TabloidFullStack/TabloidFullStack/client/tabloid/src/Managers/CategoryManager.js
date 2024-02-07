import React from "react";

//use exact URL location in baseUrl ----> 5001 in this case
const baseUrl = 'https://localhost:5001/api/Category';

export const getAllCategories = () => {
  return fetch(baseUrl) 
  .then((res) => {
    return res.json();
  })
};



export const addCategory = (singleCategory) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleCategory),
  });
}; 