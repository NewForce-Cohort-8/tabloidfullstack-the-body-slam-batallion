using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetPostById(int id)
        {
            Post post = _postRepository.GetPostById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            post.CreateDateTime = DateTime.Now;
            post.PublishDateTime = DateTime.Now;
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        [HttpGet("GetUserPosts/{id}")]
        public IActionResult Get(int id)
        {
            List<Post> posts = _postRepository.GetPostByUserId(id);
            if (posts == null)

            {
                return NotFound();
            }

            return Ok(posts);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _postRepository.Delete(id);
                return NoContent();
            }
            catch (SqlException ex)
            {
                // Log the exception or handle it appropriately
                Console.WriteLine("SQL Exception occurred: " + ex.Message);
                return StatusCode(500, "An error occurred while deleting the post.");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }
            post.CreateDateTime = DateTime.Now;
            post.PublishDateTime = DateTime.Now;
            _postRepository.Update(post);
            return NoContent();
        }
    }
}