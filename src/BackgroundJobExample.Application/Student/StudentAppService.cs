using BackgroundJobExample.BackgroundJobsCollection;
using BackgroundJobExample.BackgroundJobsCollection.DefaultAbpExample;
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.BackgroundJobs;

namespace BackgroundJobExample.Student;

public class StudentAppService : ApplicationService
{
    private readonly IBackgroundJobManager _backgroundJobManagerOfAbp;

    public StudentAppService(IBackgroundJobManager backgroundJobManager)
    {
        _backgroundJobManagerOfAbp = backgroundJobManager;
    }

    #region DefaultJobPlanOfAbp
    public async Task<string> DefultAbpJobExample()
    {
        TimeSpan delay = TimeSpan.FromSeconds(5);
        string? jobId = await _backgroundJobManagerOfAbp.EnqueueAsync(new EmailSendingArgs()
        {
            Body = "test",
            EmailAddress = "test",
            Subject = "test",
        }, BackgroundJobPriority.High, delay);


        return jobId;
    }
    #endregion

    #region JobsUsingHangFire
    public async Task<string> FireAndForgetJobUsingHangFire()
    {

        string jobId = Hangfire.BackgroundJob.Enqueue<EmailSendingJob1>(x => x.SendEmail(new EmailSendingArgs()
        {

        }));

        return jobId;
    }
    public async Task<string> ScheduleJobUsingHangFire()
    {
        // schedule
        var jobId = Hangfire.BackgroundJob.Schedule<EmailSendingJob1>(queue: "alpha", x => x.SendEmail(
            new EmailSendingArgs()
            {
                Subject = "test",
                Body = "test",
                EmailAddress = "test"
            }), TimeSpan.FromSeconds(10));
        return jobId;
    }

    public async Task<string> RecurringJobUsingHangFire()
    {
        Hangfire.RecurringJob.AddOrUpdate<EmailSendingJob1>
                   (Guid.NewGuid().ToString(), x => x.SendEmail(new EmailSendingArgs()
                   {
                       Subject = "test",
                       Body = "test",
                       EmailAddress = "test"
                   }), "*/5 * * * * *" );

        return await Task.FromResult("hiii");
    }

    #endregion

    #region ForRefer
    ////Refer
    //public Task CallJobZ()
    //{
    //    // schedule
    //    var jobId = Hangfire.BackgroundJob.Schedule<IBackgroundServiceManagement>(queue: "alpha", x => x.RunJOb(), TimeSpan.FromSeconds(10));

    //    //recurring job
    //    RecurringJob.AddOrUpdate<IBackgroundServiceManagement>
    //               (Guid.NewGuid().ToString(), x => x.RunJOb(), "20 13 10 4 *");

    //    //fire and forget
    //    var jobId2 = BackgroundJob.Enqueue<IBackgroundServiceManagement>(x => x.RunJOb());
    //    return Task.CompletedTask;
    //}
    #endregion




    public async Task<string> RecurringJobUsingHangFire2()
    {
        // Define the specific start time (e.g., today at 10:00 AM)
        var startTime = DateTime.Now.Date.AddHours(10);
        if (DateTime.Now > startTime)
        {
            // If the current time is past the start time, schedule for the next day at the same time
            startTime = startTime.AddDays(1);
        }

        // Schedule the initial job
        var initialJobId = Hangfire.BackgroundJob.Schedule<EmailSendingJob1>(
            x => x.SendEmail(new EmailSendingArgs()
            {
                Subject = "test",
                Body = "test",
                EmailAddress = "test"
            }),
            startTime - DateTime.Now);

        // Set up the recurring job to start after the initial job has been executed
        Hangfire.RecurringJob.AddOrUpdate<EmailSendingJob1>(
            Guid.NewGuid().ToString(),
            x => x.SendEmail(new EmailSendingArgs()
            {
                Subject = "test",
                Body = "test",
                EmailAddress = "test"
            }),
            "*/5 * * * * *"  // Cron expression for every 5 seconds, adjust as necessary
        );

        return await Task.FromResult("Recurring job scheduled to start at: " + startTime);
    }

}
