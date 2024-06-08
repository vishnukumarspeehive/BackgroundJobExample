using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace BackgroundJobExample.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class BackgroundJobExampleDbContextFactory : IDesignTimeDbContextFactory<BackgroundJobExampleDbContext>
{
    public BackgroundJobExampleDbContext CreateDbContext(string[] args)
    {
        BackgroundJobExampleEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<BackgroundJobExampleDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new BackgroundJobExampleDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../BackgroundJobExample.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
