﻿using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
        void Add(Category category);
        void Delete(int id);
        void UpdateCategory(Category category);
        Category GetCategoryById(int id);
    }
}