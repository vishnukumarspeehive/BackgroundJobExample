import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      // {
      //   path: '/maker-list',
      //   name: '::Menu:Maintenance',
      //   iconClass: 'fas fa-book',
      //   order: 2,
      //   layout: eLayoutType.application,
      // },
      // {
      //   path: '/maker',
      //   name: '::Menu:Maker',
      //   parentName: '::Menu:Maintenance',
      //   layout: eLayoutType.application,
      // },
      
      // {
      //   path: '/unscheduledjob-list',
      //   name: '::Menu:Maintenance',
      //   iconClass: 'fas fa-book',
      //   order: 2,
      //   layout: eLayoutType.application,
      // },
      // {
      //   path: '/unscheduledjob',
      //   name: '::Menu:UnscheduledJob',
      //   parentName: '::Menu:Maintenance',
      //   layout: eLayoutType.application,
      // },
    ]);
  };
}
