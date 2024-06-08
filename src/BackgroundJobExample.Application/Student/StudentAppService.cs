using BackgroundJobExample.BackgroundJobsCollection;
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.BackgroundJobs;

namespace BackgroundJobExample.Student;

public class StudentAppService: ApplicationService
{
    private readonly IBackgroundJobManager _backgroundJobManagerOfAbp;

    public StudentAppService(IBackgroundJobManager backgroundJobManager)
    {
        _backgroundJobManagerOfAbp = backgroundJobManager;
    }

    public async Task<string> CallJob1()
    {
        TimeSpan delay = TimeSpan.FromSeconds(5);
        string? jobId=await _backgroundJobManagerOfAbp.EnqueueAsync( new EmailSendingArgs()
        {
          Body="test",
          EmailAddress="test",
          Subject="test",   
        },BackgroundJobPriority.High,delay);


        return jobId;
    }
}
