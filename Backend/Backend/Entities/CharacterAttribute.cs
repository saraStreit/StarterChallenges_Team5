using System.ComponentModel.DataAnnotations;

namespace Backend.Entities;

public class CharacterAttribute
(
    int id,
    int strength,
    int dexterity,
    int constitution,
    int intelligence,
    int wisdom,
    int charisma,
    int initiative
)
{
    [Key] public int Id { get; private set; } = id;
    public int Strength { get; set; } = strength;
    public int Dexterity { get; set; } = dexterity;
    public int Constitution { get; set; } = constitution;
    public int Intelligence { get; set; } = intelligence;
    public int Wisdom { get; set; } = wisdom;
    public int Charisma { get; set; } = charisma;
    public int Initiative { get; set; } = initiative;
}