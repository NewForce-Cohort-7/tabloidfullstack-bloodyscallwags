﻿using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IUserRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
        void UpdateActive(UserProfile user);

        //UserProfile GetByActiveStatus(int id);
    }
}
