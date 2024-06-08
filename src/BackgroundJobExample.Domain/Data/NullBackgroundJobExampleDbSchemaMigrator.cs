using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace BackgroundJobExample.Data;

/* This is used if database provider does't define
 * IBackgroundJobExampleDbSchemaMigrator implementation.
 */
public class NullBackgroundJobExampleDbSchemaMigrator : IBackgroundJobExampleDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
