namespace Backend.Controllers;

using DTOs;
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
    public async Task<IActionResult> CreateCharacter([FromBody] CreateCharacterDto createCharacterDto)
    {
        if (createCharacterDto == null)
        {
            return BadRequest("Character data is required.");
        }

        // Validate the DTO
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Create a new Character object from the DTO
        var character = new Character
        (
            id: 0,
            name: createCharacterDto.Name,
            gender: createCharacterDto.Gender,
            race: createCharacterDto.Race,
            characterClass: createCharacterDto.CharacterClass,
            level: createCharacterDto.Level,
            armor: createCharacterDto.Armor,
            speed: createCharacterDto.Speed,
            attributes: new CharacterAttribute
            (
                id: 0,
                strength: createCharacterDto.AttributesDto.Strength ?? 0,
                dexterity: createCharacterDto.AttributesDto.Dexterity ?? 0,
                constitution: createCharacterDto.AttributesDto.Constitution ?? 0,
                intelligence: createCharacterDto.AttributesDto.Intelligence ?? 0,
                wisdom: createCharacterDto.AttributesDto.Wisdom ?? 0,
                charisma: createCharacterDto.AttributesDto.Charisma ?? 0,
                initiative: createCharacterDto.AttributesDto.Initiative ?? 0
            ),
            healthPoints: new HealthPoints
            (
                id: 0,
                current: createCharacterDto.HealthPointsDto.Current ?? 0,
                max: createCharacterDto.HealthPointsDto.Max ?? 0
            )
        );

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
    public async Task<IActionResult> UpdateCharacter(int id, [FromBody] UpdateCharacterDto updateCharacterDto)
    {
        if (updateCharacterDto == null)
        {
            return BadRequest("Update data cannot be null.");
        }

        var character = await context.Characters.Include(c => c.Attributes).FirstOrDefaultAsync(c => c.Id == id);
        if (character == null)
        {
            return NotFound();
        }

        // Update character properties
        if (!string.IsNullOrWhiteSpace(updateCharacterDto.Name))
        {
            character.Name = updateCharacterDto.Name;
        }

        if (updateCharacterDto.Armor.HasValue)
        {
            character.Armor = updateCharacterDto.Armor.Value;
        }

        if (updateCharacterDto.Attributes != null)
        {
            character.Attributes.Strength = updateCharacterDto.Attributes.Strength;
            character.Attributes.Dexterity = updateCharacterDto.Attributes.Dexterity;
            character.Attributes.Constitution = updateCharacterDto.Attributes.Constitution;
            character.Attributes.Intelligence = updateCharacterDto.Attributes.Intelligence;
            character.Attributes.Wisdom = updateCharacterDto.Attributes.Wisdom;
            character.Attributes.Charisma = updateCharacterDto.Attributes.Charisma;
            character.Attributes.Initiative = updateCharacterDto.Attributes.Initiative;
        }

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