using BackgroundJobExample.Samples;
using Xunit;

namespace BackgroundJobExample.EntityFrameworkCore.Domains;

[Collection(BackgroundJobExampleTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<BackgroundJobExampleEntityFrameworkCoreTestModule>
{

}
