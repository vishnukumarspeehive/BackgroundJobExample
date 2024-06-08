using Volo.Abp.BackgroundJobs;

namespace BackgroundJobExample.BackgroundJobsCollection;

//Default way of ABP
[BackgroundJobName("emailJob1")]
public class EmailSendingArgs
{
    public string EmailAddress { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }
}
