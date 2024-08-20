import type { CreateUpdateJobTypeDto, JobTypeDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobTypeService {
  apiName = 'Default';

  create = (input: CreateUpdateJobTypeDto) =>
    this.restService.request<any, JobTypeDto>({
      method: 'POST',
      url: `/api/app/jobType`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/jobType/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, JobTypeDto>({
      method: 'GET',
      url: `/api/app/jobType/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<JobTypeDto>>({
      method: 'GET',
      url: `/api/app/jobType`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateJobTypeDto) =>
    this.restService.request<any, JobTypeDto>({
      method: 'PUT',
      url: `/api/app/jobType/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
