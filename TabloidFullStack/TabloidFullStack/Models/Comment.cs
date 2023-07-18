using System.ComponentModel.DataAnnotations;

namespace TabloidFullStack.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Subject { get; set; }

        [Required]
        [MaxLength(4000)]
        public string Content { get; set; }

        [Required]
        public DateTime CreateDateTime { get; set; }

        [Required]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }

        [Required]
        public int PostId { get; set; }
        public Post Post { get; set; }
    }
}