using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class BaseApiController : ControllerBase
  {
    private IMediator _mediator;

    // Inject Mediator from HttpContext services
    // all controllers derived from this BaseAPI controller can access to this Mediator
    protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
  }
}