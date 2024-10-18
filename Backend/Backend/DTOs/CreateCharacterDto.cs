namespace Backend.DTOs;

public class CreateCharacterDto
{
    public string? Name { get; set; }
    public uint? Armor { get; set; }
    public uint? HealthPoints { get; set; }
}