using Microsoft.Data.SqlClient;
using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICategoryRepository
    {
        SqlConnection Connection { get; }

        void AddCategory(Category category);
        void DeleteCategory(int categoryId);
        List<Category> GetAllCategories();
        Category GetCategoryById(int id);
        void UpdateCategory(Category category);
    }
}