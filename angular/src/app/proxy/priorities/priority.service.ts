import type { CreateUpdatePriorityDto, PriorityDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PriorityService {
  apiName = 'Default';

  create = (input: CreateUpdatePriorityDto) =>
    this.restService.request<any, PriorityDto>({
      method: 'POST',
      url: `/api/app/priority`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/priority/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, PriorityDto>({
      method: 'GET',
      url: `/api/app/priority/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<PriorityDto>>({
      method: 'GET',
      url: `/api/app/priority`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdatePriorityDto) =>
    this.restService.request<any, PriorityDto>({
      method: 'PUT',
      url: `/api/app/priority/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
