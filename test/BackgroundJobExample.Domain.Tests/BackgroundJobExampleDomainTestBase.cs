using Volo.Abp.Modularity;

namespace BackgroundJobExample;

/* Inherit from this class for your domain layer tests. */
public abstract class BackgroundJobExampleDomainTestBase<TStartupModule> : BackgroundJobExampleTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
