using System.ComponentModel.DataAnnotations;

namespace Backend.Entities;

public class HealthPoints
(
    int id,
    int current,
    uint max
)
{
    [Key] public int Id { get; private set; } = id;

    public int Current { get; set; } = current;

    public uint Max { get; set; } = max;
}