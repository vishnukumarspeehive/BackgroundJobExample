import type { CreateUpdateLocationDto, LocationDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  apiName = 'Default';

  create = (input: CreateUpdateLocationDto) =>
    this.restService.request<any, LocationDto>({
      method: 'POST',
      url: `/api/app/location`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/location/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, LocationDto>({
      method: 'GET',
      url: `/api/app/location/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<LocationDto>>({
      method: 'GET',
      url: `/api/app/location`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateLocationDto) =>
    this.restService.request<any, LocationDto>({
      method: 'PUT',
      url: `/api/app/location/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
