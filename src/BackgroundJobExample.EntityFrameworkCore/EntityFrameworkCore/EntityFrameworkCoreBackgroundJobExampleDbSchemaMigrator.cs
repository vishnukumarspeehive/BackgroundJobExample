using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BackgroundJobExample.Data;
using Volo.Abp.DependencyInjection;

namespace BackgroundJobExample.EntityFrameworkCore;

public class EntityFrameworkCoreBackgroundJobExampleDbSchemaMigrator
    : IBackgroundJobExampleDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreBackgroundJobExampleDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the BackgroundJobExampleDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<BackgroundJobExampleDbContext>()
            .Database
            .MigrateAsync();
    }
}
