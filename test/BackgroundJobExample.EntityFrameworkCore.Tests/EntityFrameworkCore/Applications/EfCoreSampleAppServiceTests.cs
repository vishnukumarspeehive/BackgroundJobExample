using BackgroundJobExample.Samples;
using Xunit;

namespace BackgroundJobExample.EntityFrameworkCore.Applications;

[Collection(BackgroundJobExampleTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<BackgroundJobExampleEntityFrameworkCoreTestModule>
{

}
