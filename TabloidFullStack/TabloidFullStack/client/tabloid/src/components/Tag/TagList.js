import React, { useEffect } from "react";
import { useState } from "react";
import { deleteTag, getAllTags } from "../../Managers/TagManager";
import { Button} from "reactstrap";
import { useNavigate } from "react-router";




export default function TagList() {
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const getTags = () => {
      getAllTags().then(allTags => setTags(allTags));
    };
    const deleteTagById = (id) => {
      const confirmDelete = window.confirm("Do you really want to delete this category? This is your last chance to back out.");
      if (confirmDelete) {
        deleteTag(id).then(() => {getTags();})
      }
    }
  
    useEffect(() => {
      getTags();
    }, []);
  
  return (
    <div>

    <table>
        <tr>
          <th>ID</th>
          <th>Tag Name</th>
        </tr>
        {tags.map((tag) => (
          <tr key={tag.id} >
            <td>{tag.id}</td>
            <td>{tag.name}</td>
            
            <Button
				onClick={(e) => {
					e.preventDefault();
					navigate(`/tag/edit/${tag.id}`);
				}}
			>
				Edit Tag
			</Button>
      <Button 
        className="table-button" 
        onClick={() =>
         deleteTagById(tag.id)}>Delete</Button>
          </tr>
          
        ))}
    </table>

    <Button
				onClick={(e) => {
					e.preventDefault();
					navigate("/tag/add");
				}}
			>
				Create Tag
			</Button>
    
  </div>
  );
}