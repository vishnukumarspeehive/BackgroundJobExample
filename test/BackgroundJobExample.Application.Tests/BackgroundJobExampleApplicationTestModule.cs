using Volo.Abp.Modularity;

namespace BackgroundJobExample;

[DependsOn(
    typeof(BackgroundJobExampleApplicationModule),
    typeof(BackgroundJobExampleDomainTestModule)
)]
public class BackgroundJobExampleApplicationTestModule : AbpModule
{

}
