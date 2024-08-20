import type { CreateUpdateMaintenanceTypeDto, MaintenanceTypeDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceTypeService {
  apiName = 'Default';

  create = (input: CreateUpdateMaintenanceTypeDto) =>
    this.restService.request<any, MaintenanceTypeDto>({
      method: 'POST',
      url: `/api/app/maintenanceType`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/maintenanceType/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MaintenanceTypeDto>({
      method: 'GET',
      url: `/api/app/maintenanceType/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<MaintenanceTypeDto>>({
      method: 'GET',
      url: `/api/app/maintenanceType`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateMaintenanceTypeDto) =>
    this.restService.request<any, MaintenanceTypeDto>({
      method: 'PUT',
      url: `/api/app/maintenanceType/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
