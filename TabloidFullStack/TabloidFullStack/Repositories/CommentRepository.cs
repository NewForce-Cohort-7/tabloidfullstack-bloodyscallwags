using TabloidFullStack.Models;
using TabloidFullStack.Utils;

namespace TabloidFullStack.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base
            (configuration) { }

        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    // Note, we are not including the Id column here, because SQL Server is configured to automatically generate it
                    cmd.CommandText = @"
                        INSERT INTO Comment (PostId, UserProfileId, Subject, Content, CreateDateTime)
                        OUTPUT INSERTED.ID
                        VALUES (@PostId, @UserProfileId, @Subject, @Content, @CreateDateTime)";
                    DbUtils.AddParameter(cmd, "@PostId", comment.PostId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", comment.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Subject", comment.Subject);
                    DbUtils.AddParameter(cmd, "@Content", comment.Content);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", comment.CreateDateTime);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"
                        DELETE FROM Comment
                        WHERE Id = @Id
                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Update(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    // Note, we are including the Id column here, because SQL Server is configured to automatically generate it
                    cmd.CommandText = @"
                        UPDATE Comment
                        SET PostId = @PostId,
                            UserProfileId = @UserProfileId,
                            Subject = @Subject,
                            Content = @Content,
                            CreateDateTime = @CreateDateTime
                        WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@PostId", comment.PostId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", comment.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Subject", comment.Subject);
                    DbUtils.AddParameter(cmd, "@Content", comment.Content);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", comment.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@Id", comment.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}