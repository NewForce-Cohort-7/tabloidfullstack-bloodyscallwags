using Microsoft.Data.SqlClient;
using TabloidFullStack.Models;
using TabloidFullStack.Utils;

namespace TabloidFullStack.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAllApprovedPosts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.Title, p.Content, p.ImageLocation, p.CreateDateTime, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId, up.Id AS AuthorId, up.DisplayName, up.FirstName, up.LastName, up.ImageLocation AS AuthorImage, up.UserTypeId, up.email, c.Name AS CategoryName, ut.[Name] AS UserTypeName
                        FROM Post p
                               LEFT JOIN UserProfile up on up.Id = p.UserProfileId
                               LEFT JOIN Category c on c.Id = p.CategoryId
                               LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                        WHERE p.IsApproved = 1 AND p.PublishDateTime < SYSDATETIME()
                        ORDER BY p.PublishDateTime DESC
                        ";

                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(NewPostFromReader(reader));
                    }

                    reader.Close();

                    return posts;


                }
            }
        }



        public List<Post> GetPostsById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.Title, p.Content, p.ImageLocation, p.CreateDateTime, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId, up.Id AS AuthorId, up.DisplayName, up.FirstName, up.LastName, up.ImageLocation AS AuthorImage, up.UserTypeId, up.email, c.Name AS CategoryName, ut.[Name] AS UserTypeName
                        FROM Post p
                               LEFT JOIN UserProfile up on up.Id = p.UserProfileId
                               LEFT JOIN Category c on c.Id = p.CategoryId
                               LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                        WHERE p.UserProfileId = @Id AND p.PublishDateTime < SYSDATETIME()
                        ORDER BY p.PublishDateTime DESC
                        ";

                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        posts.Add(NewPostFromReader(reader));
                    }

                    reader.Close();

                    return posts;


                }
            }
        }

        private Post NewPostFromReader(SqlDataReader reader)
        {
            return new Post()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                Title = DbUtils.GetString(reader, "Title"),
                Content = DbUtils.GetString(reader, "Content"),
                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                IsApproved = DbUtils.GetBoolean(reader, "IsApproved"),
                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                PublishDateTime = DbUtils.GetDateTime(reader, "PublishDatetime"),
                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                Category = new Category()
                {
                    Id = DbUtils.GetInt(reader, "CategoryId"),
                    Name = DbUtils.GetString(reader, "CategoryName"),
                },
                UserProfile = new UserProfile()
                {
                    Id = DbUtils.GetInt(reader, "AuthorId"),
                    FirstName = DbUtils.GetString(reader, "FirstName"),
                    LastName = DbUtils.GetString(reader, "LastName"),
                    Email = DbUtils.GetString(reader, "Email"),
                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                    ImageLocation = DbUtils.GetString(reader, "AuthorImage"),
                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                    UserType = new UserType()
                    {
                        Id = DbUtils.GetInt(reader, "UserTypeId"),
                        Name = DbUtils.GetString(reader, "UserTypeName")
                    }
                }
            };
        }

    }
}
