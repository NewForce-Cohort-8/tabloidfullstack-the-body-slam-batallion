using TabloidFullStack.Models;
namespace TabloidFullStack.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();

        List<Post> GetPostByUserId(int userProfileId);
        Post GetPostById(int id);

        void Add(Post post);
        void Update(Post post);
        void Delete(int id);



    }
}