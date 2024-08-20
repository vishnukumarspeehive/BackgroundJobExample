import type { CreateUpdateEquipmentStatusDto, EquipmentStatusDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EquipmentStatusService {
  apiName = 'Default';

  create = (input: CreateUpdateEquipmentStatusDto) =>
    this.restService.request<any, EquipmentStatusDto>({
      method: 'POST',
      url: `/api/app/equipmentStatus`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/equipmentStatus/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EquipmentStatusDto>({
      method: 'GET',
      url: `/api/app/equipmentStatus/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<EquipmentStatusDto>>({
      method: 'GET',
      url: `/api/app/equipmentStatus`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateEquipmentStatusDto) =>
    this.restService.request<any, EquipmentStatusDto>({
      method: 'PUT',
      url: `/api/app/equipmentStatus/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
