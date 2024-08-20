

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DashboardComponent } from './pages/pages/dashboard/dashboard.component';
import { AdminDefaultPageComponent } from './pages/pages/admin-default-page/admin-default-page.component';
import { ImportSparepartComponent } from './pages/mdm-pages/import-sparepart/import-sparepart.component';
import { DueJobComponent } from './pages/pages/due-job/due-job.component';
import { JobstatusComponent } from './pages/mdm-pages/jobstatus/jobstatus.component';
import { EquipmentstatusComponent } from './pages/mdm-pages/equipmentstatus/equipmentstatus.component';

import { FrequencytypeComponent } from './pages/mdm-pages/frequencytype/frequencytype.component';
import { FrequencyComponent } from './pages/mdm-pages/frequency/frequency.component';
import { LocationComponent } from './pages/mdm-pages/location/location.component';
import { PriorityComponent } from './pages/mdm-pages/priority/priority.component';
import { NavbaroneComponent } from './pages/pages/navbarone/navbarone.component';

import { TestLayoutComponent } from './layouts/test-layout/test-layout.component';
import { TestComponent } from './pages/planedjob-pages/test/test.component';
import { AddVesselComponent } from './pages/pages/add-vessel/add-vessel.component';
import { VesselListComponent } from './pages/pages/vessel-list/vessel-list.component';
import { ImportEquipmentComponent } from './pages/mdm-pages/import-equipment/import-equipment.component';
import { PlanedJobLayoutComponent } from './layouts/planed-job-layout/planed-job-layout.component';
import { TabstripComponent } from './pages/planedjob-pages/tabstrip/tabstrip.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/common/header/header.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { AddEquipmentComponent } from './pages/pages/add-equipment/add-equipment.component';
import { TreeComponent } from './pages/planedjob-pages/tree/tree.component';
import { SideNavComponent } from './layouts/common/side-nav/side-nav.component';
import { UnscheduledjobComponent } from './pages/pages/unscheduledjob/unscheduledjob.component';
import { MakerComponent } from './pages/mdm-pages/maker/maker.component';
import { TreeViewComponent } from './pages/planedjob-pages/tree-view/tree-view.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { BreakdownjobComponent } from './pages/pages/breakdownjob/breakdownjob.component';
import { ModelComponent } from './pages/mdm-pages/model/model.component';
import { MdmLayoutComponent } from './layouts/mdm-layout/mdm-layout.component';
import { CBMComponent } from './pages/mdm-pages/cbm/cbm.component';
import { CriticalComponent } from './pages/mdm-pages/critical/critical.component';
import { JobplanComponent } from './pages/planedjob-pages/jobplan/jobplan.component';
import { RankComponent } from './pages/mdm-pages/rank/rank.component';
import { MaintenancetypeComponent } from './pages/mdm-pages/maintenancetype/maintenancetype.component';
import { SafetylevelComponent } from './pages/mdm-pages/safetylevel/safetylevel.component';
import { EquipmenttypeComponent } from './pages/mdm-pages/equipmenttype/equipmenttype.component';
import { JobtypeComponent } from './pages/mdm-pages/jobtype/jobtype.component';
import { ReportbyComponent } from './pages/mdm-pages/reportby/reportby.component';
import { ImportJobplanComponent } from './pages/mdm-pages/import-jobplan/import-jobplan.component';
import { PostponedjobsComponent } from './pages/pages/postponedjobs/postponedjobs.component';
import { CbmconfigureComponent } from './pages/mdm-pages/cbmconfigure/cbmconfigure.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent, 
    children: [
       { path: '', component: HomeLayoutComponent, pathMatch: 'full' },
       { path: 'admin', component: AdminDefaultPageComponent, pathMatch: 'full' }
    ],
  },
  {
    path:'addvessel',
    component:AddVesselComponent
  },
  {
    path:'vessel',
    component:VesselListComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  // {
  //   path: 'tabstip2',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./PlanedJobs/tabstrip/tabstrip.module').then((m) => m.TabstripModule),
  // },
  
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // }
  
  
  {
    path:"tree",
    component:TreeComponent
  },
  {
    path:"layout",
    component:LayoutComponent
  },
  {
    path:"tree2",
    component:TreeViewComponent
  },
  {
     path:'planedJob/:id',
     component:PlanedJobLayoutComponent
  },
  {
    path: 'landing',
     component: LandingPageComponent,
     //component: LayoutComponent,
    children:[

      {
        path:"importEquipments",
        component:ImportEquipmentComponent

      },
      {
        path:"importSparepart",
        component:ImportSparepartComponent

      },

      {
        path:"importJobplan",
        component:ImportJobplanComponent

      },
      {
        path:"equipment",
        component:AddEquipmentComponent

      },
      {
        path:"jobplan",
        component:JobplanComponent

      },
      {
        path:"tree",
        component:TreeComponent

      },
      {
        path:"vesselList",
        component:VesselListComponent

      }
      ,
      {
        path:"addVessel",
        component:AddVesselComponent
      },
      {
        path:"dueJob/:id",
        component:DueJobComponent

      },
      
      {
        path:"PostJob/:id",
        component:PostponedjobsComponent

      },
      {
        path:"unscheduledJob/:id",
        component:UnscheduledjobComponent
      }
      ,
      {
        path:"breakdown/:id",
        component:BreakdownjobComponent
      }
      ,
      {
        path:"dashboard",
        component:DashboardComponent

      }
      ,
      {
        path:"maker",
        component:MakerComponent

      }
      ,
      {
        path:"model",
        component:ModelComponent

      },
      {
        path:"tabstrip",
        component:TabstripComponent

      },
      {
        path:'vessel',
        component:VesselListComponent
      }
    ]
     
  
  },
  {
      path:'mdm/:id',
       component:MdmLayoutComponent,
       children:[
         {
           path:'model',
           component:ModelComponent
         },
         {
          path:'maker1',
          component:MakerComponent
         },
         {
          path:"equipmentImport",
          component:ImportEquipmentComponent
  
        },
         
         {
          path:'cbm',
          component:CBMComponent
         }
         ,
         {
          path:'critical',
          component:CriticalComponent
         }
         ,
         {
          path:'priority',
          component:PriorityComponent
         }
         ,
         {
          path:'rank',
          component:RankComponent
         }
         ,
         {
          path:'maintenancetype',
          component:MaintenancetypeComponent
         }
         ,
         {
          path:'safetylevel',
          component:SafetylevelComponent
         }
         ,
         {
          path:'location',
          component:LocationComponent
         }
         ,
         {
          path:'Frequency',
          component:FrequencyComponent
         }
         ,
         {
          path:'CBM Configure',
          component:CbmconfigureComponent
         }
         ,
         {
          path:'FrequencyType',
          component:FrequencytypeComponent
         }
         ,
         {
          path:'EquipmentStatus',
          component:EquipmentstatusComponent
         }
         ,
         {
          path:'EquipmentType',
          component:EquipmenttypeComponent
         }
         ,
         {
          path:'JobStatus',
          component:JobstatusComponent
         }
         ,
         {
          path:'JobType',
          component:JobtypeComponent
         }
         ,
         {
          path:'Reportby',
          component:ReportbyComponent
         },
       ]
    },
  {
    path: 'equipment',
    component: AddEquipmentComponent,
   
  },
  
  {
    path: 'header',
    component: HeaderComponent,
    
     
  
  },
  {
    path: 'sidenav',
    component: SideNavComponent,
    
     
  
  },

  {
    path: 'navbarone',
    component: NavbaroneComponent,
    
     
  
  },


  
 
  {
    path: 'account',
    loadChildren: () =>
      import('@abp/ng.account').then((m) => m.AccountModule.forLazy({ redirectUrl: '/' })),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then((m) => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then((m) => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) => m.SettingManagementModule.forLazy()),
  },
  //{ path: 'ranks', loadChildren: () => import('./pages/mdm-pages/rank/rank.module').then(m => m.RankModule) },
  //{ path: 'pages/mdm-pages/departments', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
  //{ path: 'app/pages/mdm-pages/departments', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
  //{ path: 'departments', loadChildren: () => import('./pages/mdm-pages/department/department.module').then(m => m.DepartmentModule) },
  //{ path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
  // { path: 'maker', loadChildren: () => import('./maker/maker.module').then(m => m.MakerModule) },
  // // ,
  // { path: 'unscheduledjob', loadChildren: () => import('./unscheduledjob/unscheduledjob.module').then(m => m.UnscheduledJobModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}