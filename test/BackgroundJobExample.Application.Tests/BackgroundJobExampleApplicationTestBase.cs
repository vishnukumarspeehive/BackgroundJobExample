using Volo.Abp.Modularity;

namespace BackgroundJobExample;

public abstract class BackgroundJobExampleApplicationTestBase<TStartupModule> : BackgroundJobExampleTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
