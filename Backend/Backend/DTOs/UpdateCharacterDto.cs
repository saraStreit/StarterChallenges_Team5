using Backend.Entities;

namespace Backend.DTOs;

public class UpdateCharacterDto
{
    public string? Name { get; set; }
    public uint? Armor { get; set; }

    public string? Gender { get; set; }

    public string? Race { get; set; }
    public string? CharacterClass { get; set; }

    public uint? Level { get; set; }
    public uint? Speed { get; set; }

    public CharacterAttribute? Attributes { get; set; }
}