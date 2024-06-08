using System.Threading.Tasks;

namespace BackgroundJobExample.Data;

public interface IBackgroundJobExampleDbSchemaMigrator
{
    Task MigrateAsync();
}
