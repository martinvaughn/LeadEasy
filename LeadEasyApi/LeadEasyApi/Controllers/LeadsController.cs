using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeadEasyApi.Models;

namespace LeadEasyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadsController : ControllerBase
    {
        private readonly CoreDbContext _context;

        public LeadsController(CoreDbContext context)
        {
            _context = context;
        }

        // GET: api/Leads
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Leads>>> GetLeads()
        {
            return await _context.Leads.ToListAsync();
        }

        // GET: api/Leads/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Leads>> GetLeads(int id)
        {
            var leads = await _context.Leads.FindAsync(id);

            if (leads == null)
            {
                return NotFound();
            }

            return leads;
        }

        // PUT: api/Leads/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeads(int id, Leads leads)
        {
            if (id != leads.LeadId)
            {
                return BadRequest();
            }

            _context.Entry(leads).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeadsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Leads
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Leads>> PostLeads(Leads leads)
        {
            _context.Leads.Add(leads);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LeadsExists(leads.LeadId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLeads", new { id = leads.LeadId }, leads);
        }

        // DELETE: api/Leads/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Leads>> DeleteLeads(int id)
        {
            var leads = await _context.Leads.FindAsync(id);
            if (leads == null)
            {
                return NotFound();
            }

            _context.Leads.Remove(leads);
            await _context.SaveChangesAsync();

            return leads;
        }

        private bool LeadsExists(int id)
        {
            return _context.Leads.Any(e => e.LeadId == id);
        }
    }
}
