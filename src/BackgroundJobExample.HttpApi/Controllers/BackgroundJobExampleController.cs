using BackgroundJobExample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace BackgroundJobExample.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class BackgroundJobExampleController : AbpControllerBase
{
    protected BackgroundJobExampleController()
    {
        LocalizationResource = typeof(BackgroundJobExampleResource);
    }
}
