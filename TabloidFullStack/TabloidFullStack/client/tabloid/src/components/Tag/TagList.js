import React, { useEffect } from "react";
import { useState } from "react";
import { getAllTags } from "../../Managers/TagManager";
import { Button} from "reactstrap";
import { useNavigate } from "react-router";




export default function TagList() {
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const getTags = () => {
      getAllTags().then(allTags => setTags(allTags));
    };
  
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
				color='primary'
				onClick={(e) => {
					e.preventDefault();
					navigate(`/tag/edit/${tag.id}`);
				}}
			>
				Edit Tag
			</Button>
          </tr>
          
        ))}
    </table>

    <Button
				color='primary'
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