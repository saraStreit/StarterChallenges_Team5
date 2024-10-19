using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Character> Characters { get; set; }
    public DbSet<CharacterAttribute> CharacterAttribute { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Character>()
            .HasOne(c => c.Attributes)
            .WithMany();
        
        modelBuilder.Entity<Character>()
            .HasOne(c => c.HealthPoints)
            .WithMany();
    }
    public DbSet<User> Users { get; set; }
}