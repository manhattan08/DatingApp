using System.ComponentModel.DataAnnotations;

namespace DatingApp.DTOs;

public class RegisterDto
{
    [Required]
    public string Username { get; set; }
    [Required]
    public string KnowsAs { get; set; }
    [Required]
    public string Gender { get; set; }
    [Required]
    public DateOnly? DeteOfBirth { get; set; }
    [Required]
    public string City { get; set; }
    [Required]
    public string Country { get; set; }
    [Required]
    [StringLength(16,MinimumLength = 4)]
    public string Password { get; set; }
}