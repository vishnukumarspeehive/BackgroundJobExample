import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Maintenance',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44320',
    redirectUri: baseUrl,
    clientId: 'Maintenance_App',
    responseType: 'code',
    scope: 'offline_access Maintenance',
  },
  apis: {
    default: {
      url: 'https://localhost:44320',
      rootNamespace: 'Maintenance',
    },
  },
} as Config.Environment;
