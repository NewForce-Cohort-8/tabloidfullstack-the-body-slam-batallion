



const baseUrl = 'https://localhost:5001/api/Tag';


export const getAllTags = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const getTagById = (id) => {
	return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};



export const editTag = (tag) => {
    
    return fetch(`${baseUrl}/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
};

export const deleteTag = (id) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE"
    })
  }

export const addTag = (tag) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag),
    }) 
      
  };


