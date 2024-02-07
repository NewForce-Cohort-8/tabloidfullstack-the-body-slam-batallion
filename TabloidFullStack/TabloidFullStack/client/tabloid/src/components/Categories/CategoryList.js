//Imports go here
import React, { useEffect, useState } from "react";
import { addCategory, getAllCategories } from "../../Managers/CategoryManager";
import CategoryForm from "./CategoryForm";


/*defining CategoryList, the main function of CategoryList.js that gets exported as a compenent for ApplicationViews.js. For some reason
I cannot get the export to work when I first define CategoryList, so I export it at the bottom of this file */
const CategoryList = () => {
  //Uses state: categories holds the result of my GetAllCategories. See const getCategories below, which uses setCategories to do this
  const [categories, setCategories] = useState([]);
  //CategoryForm is like a lightswitch; when true the input for a new category is seen. When false (as is default state below), input is turned off
  const [categoryForm, setCategoryForm] = useState(false);

  //As noted above, getCategories first does a fetch (getAllCategories) and then uses setCategories from Line 11 to update "categories" to fetch result
  const getCategories = () => {
    getAllCategories().then((allCategories) => setCategories(allCategories));
  };



  //do a new fetch request to get all Categories, which may or may not now be updated with a new one after saving (see handleSave above)
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*the Add button below sets setCategoryFrom to true, which makes the input appear */}
      <a href="http://localhost:3000/categories/form"><button>Create Category</button></a>
      {/* When save is clicked, handleSave runs */}
      
    </div>
  );
};

export default CategoryList;
