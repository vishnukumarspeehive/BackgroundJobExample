import type { Vessel } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateVesselDto, VesselDto } from '../vessel-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class VesselService {
  apiName = 'Default';

  create = (input: CreateUpdateVesselDto) =>
    this.restService.request<any, VesselDto>({
      method: 'POST',
      url: `/api/app/vessel`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/vessel/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, VesselDto>({
      method: 'GET',
      url: `/api/app/vessel/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<VesselDto>>({
      method: 'GET',
      url: `/api/app/vessel`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateVesselDto) =>
    this.restService.request<any, VesselDto>({
      method: 'PUT',
      url: `/api/app/vessel/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  vishnu = () =>
    this.restService.request<any, Vessel[]>({
      method: 'GET',
      url: `/api/app/vessel/vishnu`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
