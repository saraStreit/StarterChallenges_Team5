using System.ComponentModel.DataAnnotations;

namespace Backend.Entities;

public class Character(int id, string name)
{
    [Key]
    public int Id { get; set; } = id;

    [MaxLength(20)]
    public string Name { get; set; } = name;
}
