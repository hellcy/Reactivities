using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
  public class ActivitiesController : BaseApiController
  {

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
      return await Mediator.Send(new List.Query());
    }

    // activities/id
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
      return await Mediator.Send(new Details.Query() { Id = id });
    }

    // we could omit the [FromBody] annotation because we already have [ApiController] annotation in the BaseApiController
    // so the controller is aware where to find the Activity
    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity)
    {
      return Ok(await Mediator.Send(new Create.Command() { Activity = activity }));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(Guid id, Activity activity)
    {
      activity.Id = id;
      return Ok(await Mediator.Send(new Edit.Command() { Activity = activity }));
    }
  }
}