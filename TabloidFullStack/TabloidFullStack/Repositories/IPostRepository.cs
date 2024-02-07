using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllPublishedPostsByUserProfile(int id);
        void Add(Post post);
        void DeletePost(int postId);
        List<Post> GetAllPublishedPosts();
        Post GetPostById(int id);
        Post GetPublishedPostById(int id);
        Post GetUserPostById(int id, int userProfileId);
        List<Post> GetUserPosts(int userProfileId);
        void UpdatePost(Post post);
    }
}