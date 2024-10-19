using Backend.DTOs;

namespace Backend.Controllers;

using Data;
using Entities;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UserController(AppDbContext context) : ControllerBase
{
    // POST: api/user
    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user)
    {
        if (user == null || string.IsNullOrWhiteSpace(user.Username))
        {
            return BadRequest("Username is required.");
        }

        context.Users.Add(user);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(CreateUser), new { id = user.Id }, user);
    }

    // PUT: api/user/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCharacter(int id, [FromBody] UpdateUserDto updateUserDto)
    {
        if (updateUserDto == null)
        {
            return BadRequest("Update data cannot be null.");
        }

        var user = await context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        if (!string.IsNullOrWhiteSpace(updateUserDto.Username))
        {
            user.Username = updateUserDto.Username;
        }

        if (!string.IsNullOrWhiteSpace(updateUserDto.Email))
        {
            user.Email = updateUserDto.Email;
        }

        if (!string.IsNullOrWhiteSpace(updateUserDto.Password))
        {
            user.Password = updateUserDto.Password;
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        await context.SaveChangesAsync();

        return NoContent();
    }


    // DELETE: api/user/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        context.Users.Remove(user);
        await context.SaveChangesAsync();

        return NoContent();
    }
}