using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ITagRepository
    {
        //void AddTag(Tag tag);
        //void DeleteTag(int tagId);
        List<Tag> GetAll();
        //Tag GetTagById(int id);
        //void UpdateTag(Tag tag);
    }
}