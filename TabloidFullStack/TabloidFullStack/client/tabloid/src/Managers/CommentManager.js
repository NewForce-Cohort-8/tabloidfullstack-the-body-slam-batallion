const ApiUrl = "https://localhost:5001/api/Comment/";

export const getPostComments = (postId) => {
	return fetch(`${ApiUrl}${postId}`).then((res) => res.json());
};

export const addComment = (comment) => {
	return fetch(ApiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(comment),
	});
};

export const  DeleteCommentsById = (id) => {
    return fetch(`${ApiUrl}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },}) 
  };