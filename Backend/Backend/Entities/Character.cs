namespace Backend.Entities;

using System.ComponentModel.DataAnnotations;

public class Character
{
    [Key] public int Id { get; private set; }

    [MaxLength(100)] public string Name { get; set; }

    [MaxLength(30)] public string Gender { get; set; }

    [MaxLength(30)] public string Race { get; set; }

    [MaxLength(30)] public string CharacterClass { get; set; }

    public uint Level { get; set; }

    public uint Armor { get; set; }

    public uint Speed { get; set; }

    public CharacterAttribute Attributes { get; set; }
    public HealthPoints HealthPoints { get; set; }

    public Character()
    {
    }

    public Character(int id, string name, string gender, string race, string characterClass, uint level, uint armor,
        uint speed, CharacterAttribute attributes, HealthPoints healthPoints)
    {
        Id = id;
        Name = name;
        Gender = gender;
        Race = race;
        CharacterClass = characterClass;
        Level = level;
        Armor = armor;
        Speed = speed;
        Attributes = attributes;
        HealthPoints = healthPoints;
    }
}