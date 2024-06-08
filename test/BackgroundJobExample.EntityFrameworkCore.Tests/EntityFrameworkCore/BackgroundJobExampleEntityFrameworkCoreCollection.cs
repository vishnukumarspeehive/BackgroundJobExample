﻿using Xunit;

namespace BackgroundJobExample.EntityFrameworkCore;

[CollectionDefinition(BackgroundJobExampleTestConsts.CollectionDefinitionName)]
public class BackgroundJobExampleEntityFrameworkCoreCollection : ICollectionFixture<BackgroundJobExampleEntityFrameworkCoreFixture>
{

}
