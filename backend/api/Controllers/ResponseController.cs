using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Repositories.Concrete;
using Entity;

namespace api.Controllers
{
    [ApiController]
    [Route("api/responseImages")]
    public class ResponseController : ControllerBase
    {
        private readonly responseImagesRepo _responseImagesRepo;

        public ResponseController()
        {
            _responseImagesRepo = new responseImagesRepo();
        }

        [HttpGet("{id}")]
        public IActionResult GetOneImage(int id)
        {
            ResponseImages responseImages = _responseImagesRepo.returnResponse(id);
            if (responseImages == null)
            {
                return NotFound();
            }
            return Ok(responseImages);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteResponses(int id)
        {
            bool deleted = _responseImagesRepo.DeleteResponses(id);
            if (!deleted)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpGet]
        public IActionResult GetAllResponse()
        {
            List<ResponseImages> responseImages = _responseImagesRepo.GetAllResponses();
            return Ok(responseImages);
        }
    }
}
