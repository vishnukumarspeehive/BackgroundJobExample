using System;
using System.Threading.Tasks;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.DependencyInjection;

namespace BackgroundJobExample.BackgroundJobsCollection.DefaultAbpExample;

public class EmailSendingJob1 : AsyncBackgroundJob<EmailSendingArgs>, ITransientDependency
{
    public override async Task ExecuteAsync(EmailSendingArgs args)
    {
        await SendEmail(args);
    }

    public async Task SendEmail(EmailSendingArgs args)
    {

        Console.WriteLine("Email sent1");
    }
}
