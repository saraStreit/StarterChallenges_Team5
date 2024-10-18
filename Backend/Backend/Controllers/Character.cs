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
    public async Task<IActionResult> UpdateCharacterName(int id, [FromBody] string newName)
    {
        if (string.IsNullOrWhiteSpace(newName))
        {
            return BadRequest("Character name cannot be empty.");
        }

        var character = await context.Characters.FindAsync(id);
        if (character == null)
        {
            return NotFound();
        }

        character.Name = newName;
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