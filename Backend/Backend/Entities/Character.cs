using System.ComponentModel.DataAnnotations;

namespace Backend.Entities;

public class Character
(
    int id,
    string name,
    string gender,
    string race,
    string characterClass,
    uint level,
    uint armor,
    uint speed,
    Tuple<uint, int> healthPoints,
    CharacterAttribute attributes
)
{
    [Key] public int Id { get; private set; } = id;

    [MaxLength(100)] public string Name { get; set; } = name;

    [MaxLength(30)] public string Gender { get; set; } = gender;

    [MaxLength(30)] public string Race { get; set; } = race;
    [MaxLength(30)] public string Class { get; set; } = characterClass;

    public uint Level { get; set; } = level;

    public uint Armor { get; set; } = armor;
    public uint Speed { get; set; } = speed;

    public Tuple<uint, int> HealthPoints { get; set; } = healthPoints;
    
    public CharacterAttribute Attributes = attributes;
}