import React, { useEffect, useState } from "react";
import { addCategory, deleteCategory, getAllCategories } from "../../Managers/CategoryManager";
import { Button} from "reactstrap";
import { useNavigate } from "react-router";


const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryForm, setCategoryForm] = useState(false);

  const navigate = useNavigate();

  const getCategories = () => {
    getAllCategories().then((allCategories) => setCategories(allCategories));
  };

  const deleteCategoryById = (id) => {
    const confirmDelete = window.confirm("Do you really want to delete this category? This is your last chance to back out.");
    if (confirmDelete) {
      deleteCategory(id).then(() => {getCategories();})
    }
  }

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
              <button className="table-button" onClick={() => deleteCategoryById(category.id)}>Delete</button>
              <Button onClick={(e) => { e.preventDefault(); navigate(`/categories/edit/${category.id}`); }}> Edit Category </Button>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="http://localhost:3000/categories/form"><button>Create Category</button></a>
    </div>
  );
};

export default CategoryList;
