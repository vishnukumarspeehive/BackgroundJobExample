using Volo.Abp.Settings;

namespace BackgroundJobExample.Settings;

public class BackgroundJobExampleSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(BackgroundJobExampleSettings.MySetting1));
    }
}
