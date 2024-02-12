

const baseUrl = 'https://localhost:5001/api/Post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const GetCommentsByPost= (postId)=> {
  return fetch(`https://localhost:5001/api/Comment/GetCommentsByPost?postId=${postId}`) 
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
  
  export const getUserPosts = (id) => {
    return fetch(`${baseUrl}/GetUserPosts/${id}`).then((res) => res.json());
  };
  
export const addComment = (singlePost) => { 
  return fetch('https://localhost:5001/api/Comment', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};


 export const getPostById =(id) => {
  return fetch (`${baseUrl}/${id}`).then((res)=> res.json())
 };

 export const deletePost = (id) => {
  return fetch(`https://localhost:5001/api/Post/${id}`, {
    method: "DELETE",
  })
    .then(() => getAllPosts())
};

export const editPost = (post) => {
  console.log(post)
  return fetch(`https://localhost:5001/api/Post/${post.Id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
  }).then(() => getAllPosts())
}