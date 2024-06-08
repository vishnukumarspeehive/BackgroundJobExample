using System;
using System.Collections.Generic;
using System.Text;
using BackgroundJobExample.Localization;
using Volo.Abp.Application.Services;

namespace BackgroundJobExample;

/* Inherit your application services from this class.
 */
public abstract class BackgroundJobExampleAppService : ApplicationService
{
    protected BackgroundJobExampleAppService()
    {
        LocalizationResource = typeof(BackgroundJobExampleResource);
    }
}
