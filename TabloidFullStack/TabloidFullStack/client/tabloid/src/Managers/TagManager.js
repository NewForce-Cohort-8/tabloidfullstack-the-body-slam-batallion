import React from "react";

const baseUrl = 'https://localhost:5001/api/Tag';

export const getAllTags = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

