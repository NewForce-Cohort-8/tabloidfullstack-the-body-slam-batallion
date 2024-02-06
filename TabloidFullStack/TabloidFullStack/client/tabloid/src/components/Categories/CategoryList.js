import React, { useEffect, useState } from "react";
import { addCategory, getAllCategories } from "../../Managers/CategoryManager";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryForm, setCategoryForm] = useState(false);

  const getCategories = () => {
    getAllCategories().then((allCategories) => setCategories(allCategories));
  };

  const handleSave = async (newCategoryName) => {
    try {
      const newCategory = {
        name: newCategoryName,
      };
      const response = await addCategory(newCategory);
      if (response.ok) {
        getCategories();
      } else {
        console.error("Failed to add category:", response.statusText);
      }

      setCategoryForm(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

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
      <button onClick={() => setCategoryForm(true)}>Add</button>
      {categoryForm && <CategoryForm onSave={handleSave} />}
    </div>
  );
};

export default CategoryList;
