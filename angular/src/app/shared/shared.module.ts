import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    DemoNgZorroAntdModule,
    LayoutModule,
    NzLayoutModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    DemoNgZorroAntdModule,
    NzLayoutModule
  ],
  providers: []
})
export class SharedModule {}
