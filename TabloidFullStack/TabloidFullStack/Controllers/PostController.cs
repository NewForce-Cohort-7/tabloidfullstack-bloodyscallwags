using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Repositories;
using TabloidFullStack.Models;
using System.Security.Claims;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAllApprovedPosts());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            List<Post> posts = _postRepository.GetPostsById(id);
            if (posts == null)
            {
                return NotFound();
            }
            return Ok(posts);
        }



    }
}
