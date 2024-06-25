using BackgroundJobExample.BackgroundJobsCollection.DefaultAbpExample;
using BackgroundJobExample.BackgroundJobsCollection;
using Microsoft.Extensions.Hosting;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace BackgroundJobExample.Student;

public class RecurringJobStartupTask : IHostedService
{
    public Task StartAsync(CancellationToken cancellationToken)
    {
        // Define the cron expression for the recurring job
        string cronExpression = "*/5 * * * *";  // Adjust as necessary

        // Schedule the recurring job
        Hangfire.RecurringJob.AddOrUpdate<EmailSendingJob1>
                   (Guid.NewGuid().ToString(), x => x.SendEmail(new EmailSendingArgs()
                   {
                       Subject = "test",
                       Body = "test",
                       EmailAddress = "test"
                   }), "*/5 * * * * *");



        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
