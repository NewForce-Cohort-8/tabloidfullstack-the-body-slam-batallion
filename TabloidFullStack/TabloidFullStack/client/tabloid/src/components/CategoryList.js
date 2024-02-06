import React, { useEffect, useState } from "react";
import { getAllCategories } from "../Managers/CategoryManager";


//export a list (table format) of Categories and their Ids
export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(allCategories => setCategories(allCategories));
  };

  useEffect(() => {
    getCategories();
  }, []);

//returning a table now. Map function can be used later to display Add, Edit and Delete buttons which will be imported as seperate modules
return (
        <div>
          <table>
              <tr>
                <th>ID</th>
                <th>Category Name</th>
              </tr>
              {categories.map((category) => (
                <tr key={category.id} >
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                </tr>
              ))}
          </table>
          
        </div>
  );
}