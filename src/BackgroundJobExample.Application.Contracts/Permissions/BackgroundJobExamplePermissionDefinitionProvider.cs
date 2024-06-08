using BackgroundJobExample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace BackgroundJobExample.Permissions;

public class BackgroundJobExamplePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(BackgroundJobExamplePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(BackgroundJobExamplePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BackgroundJobExampleResource>(name);
    }
}
