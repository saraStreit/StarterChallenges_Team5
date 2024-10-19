using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs;

public class CreateCharacterDto
{
    [Required(ErrorMessage = "Name is required.")]
    [MaxLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Race is required.")]
    [MaxLength(30, ErrorMessage = "Race cannot exceed 30 characters.")]
    public string Race { get; set; }

    [Required(ErrorMessage = "Character class is required.")]
    [MaxLength(30, ErrorMessage = "Character class cannot exceed 30 characters.")]
    public string CharacterClass { get; set; }

    public string Gender { get; set; } = "Unknown";
    public uint Level { get; set; } = 1;
    public uint Armor { get; set; } = 0;
    public uint Speed { get; set; } = 0;
    public CharacterAttributesDto AttributesDto { get; set; } = new();
    public HealthPointsDto HealthPointsDto { get; set; } = new();
}