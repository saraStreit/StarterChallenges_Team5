using Backend.DTOs;

namespace Backend.Controllers;

using Data;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CharacterController(AppDbContext context) : ControllerBase
{
    // POST: api/character
    [HttpPost]
    public async Task<IActionResult> CreateCharacter([FromBody] Character character)
    {
        if (character == null || string.IsNullOrWhiteSpace(character.Name))
        {
            return BadRequest("Character name is required.");
        }

        context.Characters.Add(character);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(CreateCharacter), new { id = character.Id }, character);
    }

    // GET: api/characters
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Character>>> GetCharacters()
    {
        var characters = await context.Characters.ToListAsync();
        if (characters == null)
        {
            return NotFound();
        }

        return Ok(characters);
    }

    // GET: api/characters/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Character>> GetCharacterById(int id)
    {
        var character = await context.Characters.FindAsync(id);

        if (character == null)
        {
            return NotFound();
        }

        return Ok(character);
    }

    // PUT: api/characters/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCharacter(int id, [FromBody] UpdateCharacterDto updateCharacterDto,
        [FromBody] UpdateCharacterAttributesDto updateCharacterAttributesDto)
    {
        if (updateCharacterDto == null && updateCharacterAttributesDto == null)
        {
            return BadRequest("Update data cannot be null.");
        }

        var character = await context.Characters.Include(c => c.Attributes).FirstOrDefaultAsync(c => c.Id == id);
        if (character == null)
        {
            return NotFound();
        }

        if (updateCharacterDto != null)
        {
            if (!string.IsNullOrWhiteSpace(updateCharacterDto.Name))
            {
                character.Name = updateCharacterDto.Name;
            }

            if (updateCharacterDto.Armor.HasValue)
            {
                character.Armor = updateCharacterDto.Armor.Value;
            }

            if (updateCharacterDto.HealthPoints.HasValue)
            {
                character.HealthPoints =
                    Tuple.Create(updateCharacterDto.HealthPoints.Value, character.HealthPoints.Item2);
            }
        }

        if (updateCharacterAttributesDto != null)
        {
            if (updateCharacterAttributesDto.Strength.HasValue)
            {
                character.Attributes.Strength = updateCharacterAttributesDto.Strength.Value;
            }

            if (updateCharacterAttributesDto.Dexterity.HasValue)
            {
                character.Attributes.Dexterity = updateCharacterAttributesDto.Dexterity.Value;
            }

            if (updateCharacterAttributesDto.Constitution.HasValue)
            {
                character.Attributes.Constitution = updateCharacterAttributesDto.Constitution.Value;
            }

            if (updateCharacterAttributesDto.Intelligence.HasValue)
            {
                character.Attributes.Intelligence = updateCharacterAttributesDto.Intelligence.Value;
            }

            if (updateCharacterAttributesDto.Wisdom.HasValue)
            {
                character.Attributes.Wisdom = updateCharacterAttributesDto.Wisdom.Value;
            }

            if (updateCharacterAttributesDto.Charisma.HasValue)
            {
                character.Attributes.Charisma = updateCharacterAttributesDto.Charisma.Value;
            }
        }

        // Save changes to the database
        await context.SaveChangesAsync();

        return NoContent();
    }


    // DELETE: api/characters/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCharacter(int id)
    {
        var character = await context.Characters.FindAsync(id);
        if (character == null)
        {
            return NotFound();
        }

        context.Characters.Remove(character);
        await context.SaveChangesAsync();

        return NoContent();
    }
}