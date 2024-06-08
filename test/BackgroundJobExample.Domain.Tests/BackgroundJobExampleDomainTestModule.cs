using Volo.Abp.Modularity;

namespace BackgroundJobExample;

[DependsOn(
    typeof(BackgroundJobExampleDomainModule),
    typeof(BackgroundJobExampleTestBaseModule)
)]
public class BackgroundJobExampleDomainTestModule : AbpModule
{

}
