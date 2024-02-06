using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {

        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAllTags());
        }

        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    var tag = _tagRepository.GetById(id);
        //    if (tag == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(tag);
        //}

        //[HttpGet("GetWithComments")]
        //public IActionResult GetWithComments()
        //{
        //    var posts = _tagRepository.GetAllWithComments();
        //    return Ok(posts);
        //}
        //for later
        //[HttpGet("search")]
        //public IActionResult Search(string q, bool sortDesc)
        //{
        //    return Ok(_tagRepository.Search(q, sortDesc));
        //}
        //[HttpGet("Hottest")]
        //public IActionResult SearchHottest(DateTime since)
        //{
        //    var posts = _tagRepository.SearchHottest(since);
        //    return Ok(posts);
        //}
        //[HttpPost]
        //public IActionResult Post(Tag tag)
        //{
        //    _tagRepository.Add(tag);
        //    return CreatedAtAction("Get", new { id = tag.Id }, tag);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, Tag tag)
        //{
        //    if (id != tag.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _tagRepository.Update(tag);
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _tagRepository.Delete(id);
        //    return NoContent();
        //}
    }
}