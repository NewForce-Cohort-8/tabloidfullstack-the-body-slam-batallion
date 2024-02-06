import React from "react";
import { useState } from "react";
import { getAllTags } from "../Managers/TagManager";
import { Tag } from "reactstrap";



export default function TagList() {
    const [tags, setTags] = useState([]);
    const getTags = () => getAllTags()
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="cards-column">

        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag}/>
        ))}
      </div>
    </div>
  </div>

  );
}