using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace BackgroundJobExample;

[Dependency(ReplaceServices = true)]
public class BackgroundJobExampleBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "BackgroundJobExample";
}
