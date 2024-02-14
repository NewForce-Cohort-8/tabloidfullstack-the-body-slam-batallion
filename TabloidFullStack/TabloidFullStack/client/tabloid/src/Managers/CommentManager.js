const commentApiUrl = "https://localhost:5001/api/Comment/";

export const getPostComments = (postId) => {
	return fetch(`${commentApiUrl}${postId}`).then((res) => res.json());
};

export const addComment = (comment) => {
	return fetch(commentApiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(comment),
	});
};
