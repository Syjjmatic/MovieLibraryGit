using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            return Ok(_context.Movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _context.Movies.Find(id);
            if(movie is null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            var newMovie = new Movie
            {
                Title = value.Title,
                Genre = value.Genre,
                Director = value.Director

            };
            _context.Add(newMovie);
            _context.SaveChanges();
            
            return Ok(newMovie);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put(int id, [FromBody] Movie movie)
        {
            var updateMovie = _context.Movies.FirstOrDefault(m => m.MovieId == id);
            if(id != updateMovie.MovieId)
            {
                return BadRequest();
            }
            updateMovie.Title = movie.Title;
            updateMovie.Genre = movie.Genre;
            updateMovie.Director = movie.Director;

            _context.SaveChanges();
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id, Movie movie)
        {
                 Movie movieToDelete = _context.Movies.Find(id);
                _context.Movies.Remove(movie);
                _context.SaveChangesAsync();
                return Ok();
            
           
        }
        //private bool MovieExists(int id)
        //{
        //    return _context.Movies.Any(m => m.MovieId == id);
        //}
    }
}