using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Repositories.Concrete;
using Entity;

namespace api.Controllers
{
    [ApiController]
    [Route("api/images")]
    public class ImagesController : ControllerBase
    {
        private readonly ImagesRepository _imagesRepository;

        public ImagesController()
        {
            _imagesRepository = new ImagesRepository();
        }

        [HttpGet("{id}")]
        public IActionResult GetOneImage(int id)
        {
            Images image = _imagesRepository.GetByIdAsync(id);
            if (image == null)
            {
                return NotFound();
            }
            return Ok(image);
        }

        [HttpGet]
        public IActionResult GetAllImages()
        {
            List<Images> images = _imagesRepository.GetAll();
            return Ok(images);
        }
        // Images:
        // public int ImgId { get; set; }
        // public string Img { get; set; }
        // public string description { get; set; }

        [HttpPost]
        public IActionResult AddImage([FromBody] Images image)
        {
            _imagesRepository.AddImages(image);
            return CreatedAtAction(nameof(GetOneImage), new {id = image.ImgId }, image);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteImage(int id)
        {
            bool deleted = _imagesRepository.DeleteImage(id);
            if (!deleted)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
