using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
      public interface ICommentRepository
    {
        void Add(Comment comment);
        void Delete(int id);
        void Update(Comment comment);
        List<Comment> GetByPostId(int id);
    }
}