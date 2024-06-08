using BackgroundJobExample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace BackgroundJobExample.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(BackgroundJobExampleEntityFrameworkCoreModule),
    typeof(BackgroundJobExampleApplicationContractsModule)
    )]
public class BackgroundJobExampleDbMigratorModule : AbpModule
{
}
