using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        List<UserProfile> GetAllUsers();
        UserProfile GetByEmail(string email);
    }
}