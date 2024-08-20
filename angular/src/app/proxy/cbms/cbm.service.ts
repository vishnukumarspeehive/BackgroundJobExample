import type { CBMDto, CreateUpdateCBMDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CBMService {
  apiName = 'Default';

  create = (input: CreateUpdateCBMDto) =>
    this.restService.request<any, CBMDto>({
      method: 'POST',
      url: `/api/app/cBM`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/cBM/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, CBMDto>({
      method: 'GET',
      url: `/api/app/cBM/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<CBMDto>>({
      method: 'GET',
      url: `/api/app/cBM`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateCBMDto) =>
    this.restService.request<any, CBMDto>({
      method: 'PUT',
      url: `/api/app/cBM/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
