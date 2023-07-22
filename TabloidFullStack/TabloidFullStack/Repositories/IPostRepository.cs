using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllApprovedPosts();
        List<Post> GetPostsById(int id);
    }
}