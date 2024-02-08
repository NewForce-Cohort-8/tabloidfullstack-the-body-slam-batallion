﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
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


        [HttpGet("userProfile/{userId}")]
        public IActionResult GetPostsByUser(int userId)
        {

            return Ok(_postRepository.GetAllPublishedPostsByUserProfile(userId));
        }

        [HttpGet]
        public IActionResult GetPublishedPosts()
        {
            var posts = _postRepository.GetAllPublishedPosts();
            return Ok(posts);
        }

        
        [HttpGet("{id:int}")]
        public IActionResult GetPublishedPostById(int id)
        {
            var post = _postRepository.GetPublishedPostById(id);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        [HttpPost]
public IActionResult AddPost(Post post)
{
    try
    {
      

        // Set CreateDateTime to current date and time
        post.CreateDateTime = DateTime.Now;

        _postRepository.Add(post);
        return CreatedAtAction(nameof(GetPublishedPostById), new { id = post.Id }, post);
    }
    catch (Exception ex)
    {
        // Handle the exception as per your application's requirements
        return StatusCode(500, "An error occurred while adding the post.");
    }
}



        // PUT: api/Post/5
        [HttpPut("{id}")]
        public IActionResult UpdatePost(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _postRepository.UpdatePost(post);

            return NoContent();
        }

        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public IActionResult DeletePost(int id)
        {
            _postRepository.DeletePost(id);
            return NoContent();
        }
    }
}

