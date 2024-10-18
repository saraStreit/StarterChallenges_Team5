using System.ComponentModel.DataAnnotations;

namespace Backend.Entities;

public class User(int id, string username, string email, string password)
{
    [Key]
    public int Id { get; set; } = id;

    [MaxLength(20)]
    public string Username { get; set; } = username;

    [EmailAddress]
    public string Email { get; set; } = email;

    [MinLength(20)]
    public string Password { get; set; } = password;
}