using Microsoft.AspNetCore.Mvc;
using Repositories.Concrete;
using Entity;

namespace api.Controllers
{
    [ApiController]
    [Route("api/feedback")]
    public class FeedbackController : ControllerBase
    {
        private readonly feedbackRepo _feedbackRepo;

        public FeedbackController()
        {
            _feedbackRepo = new feedbackRepo();
        }

        [HttpPost]
        public IActionResult AddImage([FromBody] feedback feedback)
        {
            try
            {
                _feedbackRepo.AddImages(feedback);
                return Ok("Feedback successfully added.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}
