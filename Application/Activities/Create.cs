using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
  public class Create
  {
    public class Command : IRequest
    {
      public Activity Activity { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        this._context = context;
      }

      // although Command doesn't return anything from the DB, 
      // the API layer still needs to know when the request is finished
      // so for this async function we are still returning a Unit, which contains nothing but to tell the API
      // that we are finished
      public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
      {
        // at this moment we are not inserting anything to the DB
        // this is simply adding the new Activity to the in-memory _context
        _context.Activities.Add(request.Activity);

        await _context.SaveChangesAsync();

        return Unit.Value;
      }
    }
  }
}