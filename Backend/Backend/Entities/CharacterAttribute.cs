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

    public int Strength { get; set; }
    public int Dexterity { get; set; }
    public int Constitution { get; set; }
    public int Intelligence { get; set; }
    public int Wisdom { get; set; }
    public int Charisma { get; set; }
    public int Initiative { get; set; }
}