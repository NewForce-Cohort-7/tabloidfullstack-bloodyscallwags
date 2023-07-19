using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepo;

        // ASP.NET will give us an instance of our Category Repository. This is called "Dependency Injection"
        public CategoryController(
            ICategoryRepository categoryRepository)
        {
            _categoryRepo = categoryRepository;
        }

        // GET: CategoryController
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepo.GetAllCategories());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var category = _categoryRepo.GetCategoryById(id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }
    }
}