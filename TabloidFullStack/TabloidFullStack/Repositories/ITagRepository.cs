using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ITagRepository
    {
        void Add(Tag tag);
        List<Tag> GetAll();
        Tag GetById(int id);
    }
}