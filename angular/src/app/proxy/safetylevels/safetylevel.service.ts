import type { CreateUpdateSafetylevelDto, SafetylevelDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SafetylevelService {
  apiName = 'Default';

  create = (input: CreateUpdateSafetylevelDto) =>
    this.restService.request<any, SafetylevelDto>({
      method: 'POST',
      url: `/api/app/safetylevel`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/safetylevel/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SafetylevelDto>({
      method: 'GET',
      url: `/api/app/safetylevel/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<SafetylevelDto>>({
      method: 'GET',
      url: `/api/app/safetylevel`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateSafetylevelDto) =>
    this.restService.request<any, SafetylevelDto>({
      method: 'PUT',
      url: `/api/app/safetylevel/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
