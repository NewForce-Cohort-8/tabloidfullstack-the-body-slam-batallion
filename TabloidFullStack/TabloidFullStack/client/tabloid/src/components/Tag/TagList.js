import React, { useEffect } from "react";
import { useState } from "react";
import { getAllTags } from "../../Managers/TagManager";
import { Button} from "reactstrap";
import { Navigate } from "react-router";




export default function TagList() {
    const [tags, setTags] = useState([]);

    const getTags = () => {
      getAllTags().then(allTags => setTags(allTags));
    };
  
    useEffect(() => {
      getTags();
    }, []);
  
  return (
    <div>
                  <Button
				color='primary'
				onClick={(e) => {
					e.preventDefault();
					Navigate("/Tag/TagCreate");
				}}
			>
				Create Tag
			</Button>
    <table>
        <tr>
          <th>ID</th>
          <th>Tag Name</th>
        </tr>
        {tags.map((tag) => (
          <tr key={tag.id} >
            <td>{tag.id}</td>
            <td>{tag.name}</td>

          </tr>
          
        ))}
    </table>
    
  </div>
  );
}