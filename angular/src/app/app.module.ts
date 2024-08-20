
import { TestLayoutComponent } from './layouts/test-layout/test-layout.component';
import { JobplanHistoryComponent } from './pages/planedjob-pages/jobplan-history/jobplan-history.component';
import { JpbplanDetailByHrComponent } from './pages/planedjob-pages/jpbplan-detail-by-hr/jpbplan-detail-by-hr.component';
import { JobplanDetailByDateComponent } from './pages/planedjob-pages/jobplan-detail-by-date/jobplan-detail-by-date.component';
//import { ResizableModule } from 'angular-resizable-element';
import { IconsProviderModule } from './icons-provider.module';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
//const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];
import { TestLazyComponent } from './pages/planedjob-pages/tabstrip/test-lazy/test-lazy.component';
import { BreakdownjobComponent } from './pages/pages/breakdownjob/breakdownjob.component';
import { TabstripComponent } from './pages/planedjob-pages/tabstrip/tabstrip.component';
import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule, ListService } from '@abp/ng.core';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { SideNavComponent } from './layouts/common/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/common/header/header.component';
import { AddEquipmentComponent } from './pages/pages/add-equipment/add-equipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './pages/planedjob-pages/tree/tree.component';
import { SparepartComponent } from './pages/planedjob-pages/sparepart/sparepart.component';
import { UnscheduledjobComponent } from './pages/pages/unscheduledjob/unscheduledjob.component';
import { MakerComponent } from './pages/mdm-pages/maker/maker.component';
import { DemoNgZorroAntdModule } from './shared/ng-zorro-antd.module';
import { JobplanListComponent } from './pages/planedjob-pages/jobplan-list/jobplan-list.component';
import { GeneralComponent } from './pages/planedjob-pages/general/general.component';
import { PlanedJobLayoutComponent } from './layouts/planed-job-layout/planed-job-layout.component';
import { TreeViewComponent } from './pages/planedjob-pages/tree-view/tree-view.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutComponent } from './layouts/layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconModule } from '@ant-design/icons-angular';
import { ModelComponent } from './pages/mdm-pages/model/model.component';
import { MdmLayoutComponent } from './layouts/mdm-layout/mdm-layout.component';
import { ImportEquipmentComponent } from './pages/mdm-pages/import-equipment/import-equipment.component';
import { CBMComponent } from './pages/mdm-pages/cbm/cbm.component';
import { CriticalComponent } from './pages/mdm-pages/critical/critical.component';
import { VesselListComponent } from './pages/pages/vessel-list/vessel-list.component';
import { AddVesselComponent } from './pages/pages/add-vessel/add-vessel.component';
import { JobplanComponent } from './pages/planedjob-pages/jobplan/jobplan.component';
import { TestComponent } from './pages/planedjob-pages/test/test.component';
import { NavbaroneComponent } from './pages/pages/navbarone/navbarone.component';
import en from '@angular/common/locales/en';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

//import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
//import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PriorityComponent } from './pages/mdm-pages/priority/priority.component';
import { RankComponent } from './pages/mdm-pages/rank/rank.component';
import { MaintenancetypeComponent } from './pages/mdm-pages/maintenancetype/maintenancetype.component';
import { SafetylevelComponent } from './pages/mdm-pages/safetylevel/safetylevel.component';
import { LocationComponent } from './pages/mdm-pages/location/location.component';
import { FrequencyComponent } from './pages/mdm-pages/frequency/frequency.component';
import { FrequencytypeComponent } from './pages/mdm-pages/frequencytype/frequencytype.component';
import { EquipmentstatusComponent } from './pages/mdm-pages/equipmentstatus/equipmentstatus.component';
import { EquipmenttypeComponent } from './pages/mdm-pages/equipmenttype/equipmenttype.component';
import { JobstatusComponent } from './pages/mdm-pages/jobstatus/jobstatus.component';
import { JobtypeComponent } from './pages/mdm-pages/jobtype/jobtype.component';
import { ReportbyComponent } from './pages/mdm-pages/reportby/reportby.component';
import { DueJobComponent } from './pages/pages/due-job/due-job.component';
import { ImportSparepartComponent } from './pages/mdm-pages/import-sparepart/import-sparepart.component';
import { ImportJobplanComponent } from './pages/mdm-pages/import-jobplan/import-jobplan.component';
import { AdminDefaultPageComponent } from './pages/pages/admin-default-page/admin-default-page.component';
import { DashboardComponent } from './pages/pages/dashboard/dashboard.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { PostponedjobsComponent } from './pages/pages/postponedjobs/postponedjobs.component';
import { CbmconfigureComponent } from './pages/mdm-pages/cbmconfigure/cbmconfigure.component';



registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,    
    AppRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    NzIconModule.forRoot(icons),
    IconModule,
    FormsModule,
    NzDropDownModule,
    IconsProviderModule,
    CoreModule.forRoot({
      environment,
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),
    ThemeBasicModule.forRoot(),

    ScrollingModule,
    DragDropModule
  ],
  declarations: [
    AppComponent,
     LandingPageComponent, 
     SideNavComponent, 
     HeaderComponent, 
     AddEquipmentComponent,
     TreeComponent,
     SparepartComponent,
     UnscheduledjobComponent,
     MakerComponent,
     TabstripComponent,
     JobplanListComponent,
     GeneralComponent,
     PlanedJobLayoutComponent,
     TreeViewComponent,
     LayoutComponent,
     BreakdownjobComponent,
     ModelComponent,
     MdmLayoutComponent,
     CBMComponent,
     CriticalComponent,
     VesselListComponent,
     AddVesselComponent,
     JobplanComponent,
     AddVesselComponent,
     TestComponent,
     //BasicJobplanDetailsComponent,
     JobplanDetailByDateComponent,
     JpbplanDetailByHrComponent,
     JobplanHistoryComponent,
     TestLayoutComponent,
     NavbaroneComponent,
     PriorityComponent,
     RankComponent,
     MaintenancetypeComponent,
     SafetylevelComponent,
     LocationComponent,
     FrequencyComponent,
     FrequencytypeComponent,
     EquipmentstatusComponent,
     EquipmenttypeComponent,
     JobstatusComponent,
     JobtypeComponent,
     ReportbyComponent,
     DueJobComponent,
     ImportJobplanComponent,
     ImportSparepartComponent,
     AdminDefaultPageComponent,
     ImportEquipmentComponent,
     DashboardComponent,
     HomeLayoutComponent,
    PostponedjobsComponent,
    CbmconfigureComponent
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US },APP_ROUTE_PROVIDER,ListService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
