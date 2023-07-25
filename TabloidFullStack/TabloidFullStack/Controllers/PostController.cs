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

        [HttpGet("UserId{Id}")]
        public IActionResult GetPostsByUserId(int Id)
        {
            List<Post> posts = _postRepository.GetPostsByUserId(Id);
            if (posts == null)
            {
                return NotFound();
            }
            return Ok(posts);
        }

        [HttpGet("PostId{Id}")]
        public IActionResult GetPostById(int Id)
        {
            var post = _postRepository.GetPostById(Id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

    }
}
