using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
  public class List
  {

    public class Query : IRequest<List<Activity>> { }

    public class Handler : IRequestHandler<Query, List<Activity>>
    {
      private readonly DataContext _context;
      private readonly ILogger<List> _logger;
      public Handler(DataContext context, ILogger<List> logger)
      {
        this._logger = logger;
        this._context = context;
      }

      public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
      {
        // this code block is to demonstration how cancellationToken is being used
        try
        {
          for (var i = 0; i < 10; ++i)
          {
            cancellationToken.ThrowIfCancellationRequested();
            await Task.Delay(1000, cancellationToken);
            _logger.LogInformation($"Task {i} has completed.");
          }
        }
        catch (Exception ex) when (ex is TaskCanceledException)
        {
          _logger.LogInformation("Task was cancelled.");
        }

        return await _context.Activities.ToListAsync(cancellationToken);
      }
    }
  }
}