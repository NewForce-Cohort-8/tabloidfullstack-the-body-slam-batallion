import React, { useState } from 'react';

//export here does not work, not sure why, so exporting at bottom of file
const CategoryForm = ({ onSave }) => {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleSave = (e) => {
    onSave(newCategoryName);
    setNewCategoryName('');
  };

  return (
    <form onSubmit={handleSave}>
      <label>
        Category Name:
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default CategoryForm;



