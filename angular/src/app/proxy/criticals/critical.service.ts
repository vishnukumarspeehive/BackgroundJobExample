import type { CreateUpdateCriticalDto, CriticalDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CriticalService {
  apiName = 'Default';

  create = (input: CreateUpdateCriticalDto) =>
    this.restService.request<any, CriticalDto>({
      method: 'POST',
      url: `/api/app/critical`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/critical/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, CriticalDto>({
      method: 'GET',
      url: `/api/app/critical/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<CriticalDto>>({
      method: 'GET',
      url: `/api/app/critical`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateCriticalDto) =>
    this.restService.request<any, CriticalDto>({
      method: 'PUT',
      url: `/api/app/critical/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
