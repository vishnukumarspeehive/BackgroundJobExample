import type { CreateUpdateEquipmentTypeDto, EquipmentTypeDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EquipmentTypeService {
  apiName = 'Default';

  create = (input: CreateUpdateEquipmentTypeDto) =>
    this.restService.request<any, EquipmentTypeDto>({
      method: 'POST',
      url: `/api/app/equipmentType`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/equipmentType/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EquipmentTypeDto>({
      method: 'GET',
      url: `/api/app/equipmentType/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<EquipmentTypeDto>>({
      method: 'GET',
      url: `/api/app/equipmentType`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateEquipmentTypeDto) =>
    this.restService.request<any, EquipmentTypeDto>({
      method: 'PUT',
      url: `/api/app/equipmentType/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
